import { usePaletteMode } from "@features/Theme";
import PaletteModeToggler from "@features/ui/components/paletteModeToggler";
import { Box, Typography } from "@mui/material";

type Props = {};
const Header = (props: Props) => {
  const { mode, toggleMode } = usePaletteMode();
  return (
    <Box className="flex items-center justify-center" mb={10} gap={10}>
      <Typography variant="h2" fontWeight={"600"} textAlign={"center"}>
        {process.env.NEXT_PUBLIC_APP_TITLE}
      </Typography>
      <PaletteModeToggler />
    </Box>
  );
};
export default Header;
