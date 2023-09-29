import Song from "@features/songs/components/song/Song";
import { useStore } from "@features/store/useStore";
import MusicSlider from "@features/ui/components/musicSlider/MusicSlider";
import { Box, Paper, Slider, Typography } from "@mui/material";
import cntl from "cntl";

type Props = {};
const UpSong = (props: Props) => {
  const { upSong } = useStore();

  return (
    <>
      {!!upSong && (
        <Paper
          sx={{
            bottom: ({ components }) =>
              components?.MuiBottomNavigation?.defaultProps?.style?.height,
            mx: ({ spacing }) => spacing(2),
            p: ({ spacing }) => spacing(2),
          }}
          className="absolute left-0 right-0 flex flex-col"
        >
          <Song
            songData={upSong}
            buttonBaseProps={{
              className: cntl`w-full`,
            }}
          />
          <Box
            px={({ spacing }) => spacing(2)}
            mt={({ spacing }) => spacing(-2)}
          >
            <MusicSlider
              total={upSong?.totalLength}
              traversed={upSong?.traversedLength}
              songId={upSong.id}
            />
          </Box>
        </Paper>
      )}
    </>
  );
};
export default UpSong;
