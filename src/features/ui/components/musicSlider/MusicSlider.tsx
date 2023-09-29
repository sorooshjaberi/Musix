import { Id } from "@features/store/models/store";
import { useStore } from "@features/store/useStore";
import { Box, Slider, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { isUndefined } from "lodash";
type Props = {
  traversed?: number;
  total?: number;
  songId: Id;
};
const MusicSlider = (props: Props) => {
  const [traversed, setTraversed] = useState<number | undefined>(
    props.traversed,
  );
  const { changeTraversedSong } = useStore();
  
  const minTraversed = !isUndefined(traversed)
    ? moment.utc(traversed * 1000).format("m:s")
    : "??";
  const minTotal = props.total
    ? moment.utc(props.total * 1000).format("m:s")
    : "??";

    //changes the traversed amount if the props.traversed has changed from somewhere else
  useEffect(() => {
    if (!isUndefined(props.traversed) && props.traversed !== traversed) {
      setTraversed(props.traversed);
    }
  }, [props.traversed]);

  return (
    <>
      <Slider
        sx={{ p: 0 }}
        size="small"
        min={0}
        max={props.total}
        value={traversed}
        onChangeCommitted={(_, value) => {
          changeTraversedSong(value as number, props.songId);
        }}
        onChange={(_, value) => {
          setTraversed(value as number);
        }}
      />
      <Box className="flex items-center justify-between" color={"grey"}>
        <Typography variant="caption">{minTraversed}</Typography>
        <Typography variant="caption">{minTotal}</Typography>
      </Box>
    </>
  );
};
export default MusicSlider;
