import Song from "@features/songs/components/song/Song";
import { useStore } from "@features/store/useStore";
import MusicSlider from "@features/ui/components/musicSlider/MusicSlider";
import { Box, Paper } from "@mui/material";
import cntl from "cntl";
import { isNaN } from "lodash";
import { useEffect, useRef, useState } from "react";
const xlog = (...a: any) => console.log("%c" + a.join(" "), "color:#123412;");

const songDataAwaiter = (
  audio: HTMLAudioElement,
): Promise<HTMLAudioElement> => {
  const initTime = Date.now();
  return new Promise((res, rej) => {
    const interval = setInterval(() => {
      const duration = audio.duration;
      if (Date.now() > initTime + 1000 * 5) {
        clearInterval(interval);
        rej();
      }
      if (!isNaN(duration)) {
        res(audio);
      }
    }, 5);
  });
};

type Props = {};
const UpSong = (props: Props) => {
  const { upSong } = useStore();
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [trackTotal, setTrackTotal] = useState<number>(0);
  // const musicPlayerRef = useRef<HTMLAudioElement | null>(
  //   new Audio(upSong!.songSrc),
  // );

  const [musicPlayer, setMusicPlayer] = useState<HTMLAudioElement | null>(
    new Audio(upSong!.songSrc),
  );

  //on song change
  useEffect(() => {
    xlog("song change");
    updateManualTrackProgress(0);
    // musicPlayerRef.current?.pause();
    setMusicPlayer(null);
    // musicPlayerRef.current = null;

    const audio = new Audio(upSong!.songSrc);
    songDataAwaiter(audio).then((audioEl) => {
      setTrackTotal(audioEl.duration);
      console.log("audio figured out");
      // musicPlayerRef.current = audio;
      setMusicPlayer(audio);
    });
    xlog(audio.duration);
  }, [upSong?.id]);

  //pause and play
  useEffect(() => {
    xlog("pause  play");
    if (upSong?.playing) {
      // musicPlayerRef.current?.play();
      musicPlayer?.play();
      console.log("heeey play")
    } else {
      // musicPlayerRef.current?.pause();
      musicPlayer?.pause();
    }
  }, [upSong?.playing, musicPlayer]);

  //music tracker
  useEffect(() => {
    // musicPlayerRef.current?.addEventListener("timeupdate", () =>
    //   updateMusicTrack(),
    // );

    musicPlayer?.addEventListener("timeupdate", () => updateMusicTrack());
    return () => {
      // musicPlayerRef.current?.removeEventListener(
      musicPlayer?.removeEventListener("timeupdate", updateMusicTrack);
    };
  }, [upSong, musicPlayer]);

  const updateMusicTrack = () => {
    if (musicPlayerRef.current) {
      const rounded = ~~musicPlayerRef.current.currentTime;
      if (rounded !== trackProgress) {
        setTrackProgress(rounded);
      }
    }
  };

  const updateManualTrackProgress = (time: number) => {
    if (musicPlayerRef.current?.currentTime)
      musicPlayerRef.current.currentTime = time;
  };

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
              total={trackTotal}
              traversed={trackProgress}
              songId={upSong.id}
              controllSongProgress={updateManualTrackProgress}
            />
          </Box>
        </Paper>
      )}
    </>
  );
};
export default UpSong;
