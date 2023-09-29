import { Stack, Typography } from "@mui/material";

type Props = {
  title?: string;
  artist?: string;
};
const SongData = (props: Props) => {
  return (
    <Stack rowGap={1} alignItems={"flex-start"}>
      <Typography variant="subtitle1">{props.title || "A Song"}</Typography>
      <Typography variant="caption">
        {props.artist || "Unknown Artist"}
      </Typography>
    </Stack>
  );
};
export default SongData;
