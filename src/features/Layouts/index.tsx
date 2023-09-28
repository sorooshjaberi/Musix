import Navigation from "@features/Layouts/components/navigation/Navigation";
import { Box, Container as MuiContainer, useTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };
const Layout = ({ children }: Props) => {
  return (
    <MuiContainer
      maxWidth="xs"
      className="relative h-[100vh] max-h-[900px]"
      sx={{
        boxShadow: "0 0 10px -3px #000",
        paddingTop: (theme) => theme.spacing(2),
      }}
    >
      <Box
        component={"main"}
        sx={{
          overflow: "auto",
          padding: (theme) => theme.spacing(4, 2),
          height: (theme) =>
            `calc(100% - ${theme.components?.MuiBottomNavigation?.defaultProps
              ?.style?.height} - ${theme.spacing(1)} )`,
        }}
      >
        {children}
      </Box>
      <Navigation />
    </MuiContainer>
  );
};
export default Layout;
