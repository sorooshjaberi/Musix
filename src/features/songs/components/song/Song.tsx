import { Box, ButtonBase, ButtonBaseProps, Icon } from "@mui/material";
import { BsShare } from "react-icons/bs";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import PlayPause from "@features/ui/components/PlayPause";
import SmallSongImage from "@features/ui/components/songItemImage/SmallSongImage";
import SongData from "@features/songs/components/SongMetaData";
import { useStore } from "@features/store/useStore";
import { Id, ISong } from "@features/store/models/songSlice";
import SongControllers from "@features/ui/components/songControllers";
import clsx from "clsx";
import cntl from "cntl";
type Props = {
  songData: ISong;
  buttonBaseProps?: ButtonBaseProps;
};
const Song = (props: Props) => {
  const { songData } = props;

  const playSong = useStore((store) => store.playSong);
  const pauseSong = useStore((store) => store.pauseSong);
  const selectAndPlay = useStore((store) => store.selectAndPlay);
  const toggleLikeSong = useStore((store) => store.toggleLikeSong);
  const upSong = useStore((store) => store.upSong);

  const showPlayPause = songData.id === upSong?.id;

  const menuItems: ReactNode[] = [
    <>
      <Icon>
        <BsShare />
      </Icon>
    </>,
  ];
  return (
    <ButtonBase
      disableRipple
      onClick={() => selectAndPlay(songData.id)}
      {...{
        ...props.buttonBaseProps,
        className: clsx(
          "block",
          cntl`overflow-hidden w-full`,
          props.buttonBaseProps?.className && props.buttonBaseProps?.className,
        ),
      }}
    >
      <Box
        sx={{
          padding: (theme) => theme.spacing(2),
        }}
        className="flex items-center"
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
