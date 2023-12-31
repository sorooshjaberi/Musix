import Song from "@features/songs/components/song/Song";
import { Id } from "@features/store/models/songSlice";
import { useStore } from "@features/store/useStore";
import MusicSlider from "@features/ui/components/musicSlider/MusicSlider";
import { Box, Paper } from "@mui/material";
import cntl from "cntl";
import { isNaN } from "lodash";
import { useEffect, useRef, useState } from "react";
const xlog = (...a: any) => console.log("%c" + a.join(" "), "color:#97d197;");

const songDataAwaiter = (
  audio: HTMLAudioElement,
): Promise<HTMLAudioElement> => {
  const initTime = Date.now();
  return new Promise((res) => {
    const durationFetcher = (event: Event) => {
      audio.removeEventListener("durationchange", durationFetcher);
      if (!isNaN(audio.duration)) {
        res(audio);
      }
    };
    audio?.addEventListener("durationchange", durationFetcher);
  });
};

let music: null | HTMLAudioElement = null,
  lastUpSongId: Id | undefined;

type Props = {};
const UpSong = (props: Props) => {
  const { upSong, pauseSong } = useStore();
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [trackTotal, setTrackTotal] = useState<number>(0);

  //on song change
  useEffect(() => {
    if (upSong?.id !== lastUpSongId) {
      updateManualTrackProgress(0);
      music?.pause();
      music = null;
      let audio: HTMLAudioElement | null = new Audio(upSong!.songSrc);
      audio.pause();
      songDataAwaiter(audio).then((audioEl) => {
        setTrackTotal(audioEl.duration);
        music = audioEl;
        music.play();
        music.preload = "metadata";
      });
      lastUpSongId = upSong?.id;
    }
  }, [upSong?.id]);

  //pause and play
  useEffect(() => {
    if (upSong?.playing) {
      music?.play();
    } else {
      music?.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upSong?.playing]);

  //music tracker
  useEffect(() => {
    music?.addEventListener("timeupdate", updateMusicTrack);
    music?.addEventListener("ended", pauseUpSong);
    return () => {
      music?.removeEventListener("timeupdate", updateMusicTrack);
      music?.removeEventListener("ended", pauseUpSong);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music]);

  const updateMusicTrack = () => {
    if (music) {
      const rounded = ~~music.currentTime;
      if (rounded !== trackProgress) {
        setTrackProgress(rounded);
      }
    }
  };

  const updateManualTrackProgress = (time: number) => {
    if (music && music.currentTime) {
      music.currentTime = time;
    }
  };

  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        artist: upSong?.artist,
        title: upSong?.title,
        artwork: upSong?.imageSrc
          ? [
              {
                src: upSong?.imageSrc!,
                sizes: "96x96",
                type: "image/jpg",
              },
            ]
          : undefined,
      });
      navigator.mediaSession.setActionHandler("play", () => music?.play());
    }
  }, []);

  const pauseUpSong = () => {
    if (upSong?.id) {
      pauseSong(upSong?.id!);
    }
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
