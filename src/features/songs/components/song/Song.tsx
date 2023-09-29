import { Box, ButtonBase, ButtonBaseProps } from "@mui/material";
import { BsShare } from "react-icons/bs";
import Image from "next/image";
import { ReactNode, useState } from "react";
import PlayPause from "@features/ui/components/PlayPause";
import SmallSongImage from "@features/ui/components/songItemImage/SmallSongImage";
import SongData from "@features/songs/components/SongMetaData";
import { useStore } from "@features/store/useStore";
import { Id, ISong } from "@features/store/models/store";
import SongControllers from "@features/ui/components/songControllers";
import clsx from "clsx";
import cntl from "cntl";
type Props = {
  songData: ISong;
  buttonBaseProps?: ButtonBaseProps;
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
    <ButtonBase
      disableRipple
      {...{
        ...props.buttonBaseProps,
        className: clsx(
          "block",
          cntl`overflow-hidden w-full`,
          props.buttonBaseProps?.className,
        ),
      }}
    >
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
