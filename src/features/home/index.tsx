import Header from "@features/home/components/Header";
import Song from "@features/songs/components/song/Song";
import { Stack } from "@mui/material";

type Props = {};
const HomeComponent = (props: Props) => {
  return (
    <Stack className="h-full">
      <Header />
      <Stack className="flex-1 overflow-auto">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </Stack>
    </Stack>
  );
};
export default HomeComponent;
