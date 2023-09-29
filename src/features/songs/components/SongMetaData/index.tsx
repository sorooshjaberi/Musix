import { Box, Stack, Typography } from "@mui/material";

type Props = {
  title?: string;
  artist?: string;
};
const SongData = (props: Props) => {
  return (
    <Box className="block max-w-[200px] overflow-hidden overflow-ellipsis whitespace-nowrap text-start">
      <Typography className="text-ellipsis whitespace-nowrap text-[1.5rem]">
        {props.title || "A Song"}
      </Typography>
      <Typography
        variant="caption"
        className="overflow-ellipsis whitespace-nowrap text-[1.2rem]"
      >
        {props.artist || "Unknown Artist"}
      </Typography>
    </Box>
  );
};
export default SongData;
