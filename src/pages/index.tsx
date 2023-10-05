import { usePaletteMode } from "@features/Theme";
import HomeComponent from "@features/home";
import Head from "next/head";

import { ICommonTagsResult, parseFile } from "music-metadata";
import { GetStaticProps } from "next";
import { ISong } from "@features/store/models/songSlice";
import { get, set } from "lodash";
import { useStore } from "@features/store/useStore";
import { useEffect } from "react";

import path from "path";
import fs from "fs/promises";
import { cwd } from "process";

type Props = {
  songs: ISong[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const musicPath = path.join(cwd(), "public", "music");

  async function parseMetaData(
    songNames: string[],
  ): Promise<(ICommonTagsResult & { src: string })[]> {
    const promises = songNames.map(async (songName) => {
      const metaData = await parseFile(path.join(musicPath, songName));
      const src = path.join("music", songName);
      return {
        ...metaData.common,
        src,
      };
    });

    return await Promise.all(promises);
  }
  const files = await fs.readdir(musicPath);
  const metaDatas = await parseMetaData(files);
  const mockDatas: ISong[] = metaDatas.map((metaData) => {
    const pic = metaData.picture;
    let imageSrc: string = "";
    if (pic) {
      const buf = pic[0].data;
      const base64 = buf.toString("base64");
      const imageSrcTemp = `data:${pic[0].format};base64,${base64}`;
      imageSrc = imageSrcTemp;
    }
    return {
      id: Date.now() + get(metaData, "title", "") + get(metaData, "artist", ""),
      songSrc: metaData.src,
      artist: metaData.artist,
      title: metaData.title,
      imageSrc,
    };
  });

  return {
    props: {
      songs: mockDatas,
    },
  };
};

export default function Home(props: Props) {
  const { setSongs } = useStore();

  useEffect(() => {
    setSongs(props.songs);
  }, []);

  return (
    <>
      <Head>
        <title>Musix</title>
      </Head>
      <HomeComponent />
    </>
  );
}
