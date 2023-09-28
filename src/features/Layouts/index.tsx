import Navigation from "@features/Layouts/components/navigation/Navigation";
import { Box, Container as MuiContainer, useTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };
const Layout = ({ children }: Props) => {
  return (
    <MuiContainer
      maxWidth="xs"
      sx={{
        boxShadow: "0 0 10px -3px #000",
        height: "100vh",
        maxHeight: "900px",
        position: "relative",
        padding: 0,
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
