import Header from "@features/home/components/Header";
import Song from "@features/songs/components/song/Song";
import { ISong } from "@features/store/models/store";
import { useStore } from "@features/store/useStore";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {};
const mockData: ISong[] = [
  {
    id: "1",
  },
  {
    id: "2",
  },
];
const HomeComponent = (props: Props) => {
  const { setSongs, songs } = useStore();

  useEffect(() => {
    setSongs(mockData);
  }, []);

  return (
    <Stack className="h-full">
      <Header />
      <Stack className="flex-1 overflow-auto">
        {songs?.map((item, index) => <Song key={index} songData={item} />)}
      </Stack>
    </Stack>
  );
};
export default HomeComponent;
