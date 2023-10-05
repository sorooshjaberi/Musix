import { usePaletteMode } from "@features/Theme";
import { Box, Icon, useTheme } from "@mui/material";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import FadeIn from "@features/ui/components/motion/fadeIn";

type Props = {};
const PaletteModeToggler = (props: Props) => {
  const { mode, toggleMode } = usePaletteMode();

  return (
    <Box
      onClick={toggleMode}
      className="flex cursor-pointer items-center justify-center rounded-full"
      sx={(theme) => ({
        width:
          theme.components?.MuiIcon?.defaultProps?.style?.width ||
          theme.spacing(10),
        height:
          theme.components?.MuiIcon?.defaultProps?.style?.width ||
          theme.spacing(10),

        boxShadow: "0 0 10px -3px #000",
      })}
    >
      {mode === "dark" && (
        <FadeIn className="flex items-center justify-center">
          <Icon>
            <BsFillMoonFill />
          </Icon>
        </FadeIn>
      )}
      {mode === "light" && (
        <FadeIn className="flex items-center justify-center">
          <Icon>
            <BsSunFill />
          </Icon>
        </FadeIn>
      )}
    </Box>
  );
};
export default PaletteModeToggler;
