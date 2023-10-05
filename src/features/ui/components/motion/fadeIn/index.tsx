import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Box, BoxProps } from "@mui/material";
type Props = {
  children: ReactNode;
} & BoxProps &
  HTMLMotionProps<"div">;
const FadeIn = (props: Props) => {
  return (
    <Box
      component={motion.div}
      {...{
        initial: {
          opacity: 0,
          scale: 0.5,
        },
        animate: {
          opacity: 1,
          scale: 1,
        },
        transition: {
          duration: 0.5,
        },
        ...props,
      }}
    >
      {props.children}
    </Box>
  );
};
export default FadeIn;
