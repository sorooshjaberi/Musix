import Pause from "@features/ui/components/pause";
import Play from "@features/ui/components/play";
import { Box } from "@mui/material";

type Props = {
  isPlaying?: boolean;
  onClick?: (e : React.MouseEvent) => void;
};
const PlayPause = (props: Props) => {
  return (
    <Box onClick={props.onClick}>
      {props.isPlaying && <Pause />}
      {!props.isPlaying && <Play />}
    </Box>
  );
};
export default PlayPause;
