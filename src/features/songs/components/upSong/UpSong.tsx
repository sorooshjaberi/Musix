import Song from "@features/songs/components/song/Song";
import { useStore } from "@features/store/useStore";
import MusicSlider from "@features/ui/components/musicSlider/MusicSlider";
import { Box, Paper, Slider, Typography } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
import cntl from "cntl";
import { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import { useTimer } from "@features/store/useTimer";

type Props = {};
const UpSong = (props: Props) => {
  const { upSong } = useStore();
  const { total, traversed, changeManualTime, timerActivated } = useTimer();
  const [musicPlayer, setMusicPlayer] = useState<null | HTMLAudioElement>(null);

  //pause and play
  useEffect(() => {
    if (upSong?.playing) {
      musicPlayer?.play();
    } else {
      musicPlayer?.pause();
    }
  }, [upSong?.playing, musicPlayer]);

  //track timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (musicPlayer && upSong && timerActivated) {
        changeManualTime({
          total: musicPlayer.duration,
          traversed: musicPlayer.currentTime,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [musicPlayer, upSong, timerActivated]);

  //manual timer set
  useEffect(() => {
    if (upSong) {
      if (musicPlayer?.currentTime && upSong.traversedLength)
        musicPlayer.currentTime = upSong.traversedLength;
    }
  }, [upSong?.traversedLength, upSong?.totalLength]);

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
              total={musicPlayer?.duration}
              traversed={musicPlayer?.currentTime}
              songId={upSong.id}
            />
          </Box>
          <audio ref={setMusicPlayer} src={upSong.songSrc} />
        </Paper>
      )}
    </>
  );
};
export default UpSong;
