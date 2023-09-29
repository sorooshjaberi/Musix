import { ISong, Id } from "@features/store/models/store";
import PlayPause from "@features/ui/components/PlayPause";
import DetailedThreeDots from "@features/ui/components/detailedThreeDots";
import Like from "@features/ui/components/like";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  songData: ISong;
  menuItems?: ReactNode[];
  showPlayPause?: boolean;
  toggleLikeSong: (id: Id, like?: boolean) => void;
  playSong: (id: Id) => void;
  pauseSong: (id: Id) => void;
};
const SongControllers = (props: Props) => {
  const {
    songData,
    menuItems,
    showPlayPause = true,
    toggleLikeSong,
    playSong,
    pauseSong,
  } = props;
  return (
    <Box
      className={"ml-auto flex items-center"}
      sx={{ gap: ({ spacing }) => spacing(2) }}
    >
      <Like
        {...{
          liked: songData.liked,
          onLikeChange: (like) => toggleLikeSong(songData.id, like),
        }}
      />
      <DetailedThreeDots menuItems={menuItems} />
      {showPlayPause && (
        <PlayPause
          onClick={(e) => {
            e.stopPropagation();
            songData.playing ? pauseSong(songData.id) : playSong(songData.id);
          }}
          isPlaying={songData.playing}
        />
      )}
    </Box>
  );
};
export default SongControllers;
