import Header from "@features/home/components/Header";
import Song from "@features/songs/components/song/Song";
import { ISong } from "@features/store/models/songSlice";
import { useStore } from "@features/store/useStore";
import { Box, Stack } from "@mui/material";
import { isArray } from "lodash";
import { useEffect } from "react";

type Props = {};
const mockData: ISong[] = Array.from({ length: 100 }).map((_, index) => ({
  id: index.toString(),
  traversedLength: 100,
  totalLength: 160,
  songSrc: "/music/01 Baby (feat. Marina and The Diamonds & Luis Fonsi).mp3",
}));
const HomeComponent = (props: Props) => {
  const songs = useStore((state) => state.songs);

  return (
    <Stack className="h-full">
      {isArray(songs) && (
        <Box className="h-full overflow-auto">
          <Stack className="flex-1 overflow-auto">
            {songs?.map((item, index) => (
              <Song
                key={index}
                buttonBaseProps={{ disableRipple: false }}
                songData={item}
              />
            ))}
          </Stack>
        </Box>
      )}
    </Stack>
  );
};
export default HomeComponent;
