import DetailedThreeDots from "@features/ui/components/detailedThreeDots";
import Like from "@features/ui/components/like";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { BsShare } from "react-icons/bs";
import Image from "next/image";
import { ReactNode, useState } from "react";
import PlayPause from "@features/ui/components/PlayPause";
import SmallSongImage from "@features/ui/components/songItemImage/SmallSongImage";
import SongData from "@features/songs/components/songData/SongData";
import { useStore } from "@features/store/useStore";
import { Id, ISong } from "@features/store/models/store";
import SongControllers from "@features/ui/components/songControllers";

type Props = {
  songData: ISong;
};
const Song = (props: Props) => {
  const { songData } = props;

  const { playSong, pauseSong, toggleLikeSong, selectSong } = useStore();

  const showPlayPause = !!songData.isUp;

  const menuItems: ReactNode[] = [
    <>
      <Box>
        <BsShare />
      </Box>
    </>,
  ];
  return (
    <ButtonBase className="block">
      <Box
        sx={{
          padding: (theme) => theme.spacing(2),
        }}
        className="flex items-center"
        onClick={() => selectSong(songData.id)}
      >
        {/* song image */}
        <SmallSongImage imageSrc={songData.imageSrc} title={songData.title} />
        {/* song meta data */}
        <SongData artist={songData.artist} title={songData.title} />
        {/* song controllers */}
        <SongControllers
          {...{
            pauseSong,
            playSong,
            songData,
            toggleLikeSong,
            menuItems,
            showPlayPause,
          }}
        />
      </Box>
    </ButtonBase>
  );
};
export default Song;
