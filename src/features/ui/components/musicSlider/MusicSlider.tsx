import { Id } from "@features/store/models/songSlice";
import { useStore } from "@features/store/useStore";
import { Box, Slider, Typography } from "@mui/material";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { isUndefined } from "lodash";
type Props = {
  traversed?: number;
  total?: number;
  controllSongProgress?(time: number): void;
  songId: Id;
};
const MusicSlider = (props: Props) => {
  const { traversed } = props;

  const minTraversed = !isUndefined(traversed)
    ? moment.utc(traversed * 1000).format("m:ss")
    : "??";
  const minTotal = props.total
    ? moment.utc(props.total * 1000).format("m:ss")
    : "??";

  //changes the traversed amount if the props.traversed has changed from somewhere else
  // useEffect(() => {
  //   if (!isUndefined(props.traversed) && props.traversed !== traversed) {
  //     setTraversed(props.traversed);
  //   }
  // }, [props.traversed]);

  return (
    <>
      <Slider
        sx={{ p: 0 }}
        size="small"
        min={0}
        max={props.total}
        value={traversed}
        onChange={(_, value) => {
          props.controllSongProgress?.(value as number);
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
