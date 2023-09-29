import Header from "@features/home/components/Header";
import Song from "@features/songs/components/song/Song";
import { ISong } from "@features/store/models/store";
import { useStore } from "@features/store/useStore";
import { Stack } from "@mui/material";
import { useEffect } from "react";

type Props = {};
const mockData: ISong[] = Array.from({ length: 100 }).map((_, index) => ({
  id: index.toString(),
  traversedLength: 100,
  totalLength: 160,
}));
const HomeComponent = (props: Props) => {
  const { setSongs, songs } = useStore();

  useEffect(() => {
    setSongs(mockData);
  }, []);
  
  return (
    <Stack className="h-full">
      <Header />
      <Stack className="flex-1 overflow-auto">
        {songs?.map((item, index) => (
          <Song
            key={index}
            buttonBaseProps={{ disableRipple: false }}
            songData={item}
          />
        ))}
      </Stack>
    </Stack>
  );
};
export default HomeComponent;