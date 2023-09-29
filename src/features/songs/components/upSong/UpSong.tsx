import { useStore } from "@features/store/useStore";
import { Paper } from "@mui/material";

type Props = {};
const UpSong = (props: Props) => {
  const { songs } = useStore();
  const upSong = songs.find((song) => song.isUp);
  return (
    <Paper
      sx={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" }}
    >
      <Box
        sx={{
          padding: (theme) => theme.spacing(2),
        }}
        className="flex items-center"
        onClick={playHandler}
      >
        {/* song image */}
        <Box mr={(theme) => theme.spacing(4)}>
          <Image
            width={60}
            height={60}
            alt={props.title || "a song"}
            src={props.imageSrc || "/images/fallbackSongImage.jpeg"}
          />
        </Box>
        {/* song meta data */}
        <Stack rowGap={1} alignItems={"flex-start"}>
          <Typography variant="subtitle1">{props.title || "A Song"}</Typography>
          <Typography variant="caption">
            {props.artist || "Unknown Artist"}
          </Typography>
        </Stack>
        {/* song controllers */}
        <Box
          className={"ml-auto flex items-center"}
          sx={{ gap: ({ spacing }) => spacing(2) }}
        >
          <Like {...{ liked: props.liked, onLikeChange: props.onLike }} />
          <DetailedThreeDots menuItems={menuItems} />
          {props.isPlaying && (
            <PlayPause onClick={playHandler} isPlaying={props.isPlaying} />
          )}
        </Box>
      </Box>
    </Paper>
  );
};
export default UpSong;
