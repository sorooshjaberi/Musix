import Navigation from "@features/Layouts/components/navigation/Navigation";
import UpSong from "@features/songs/components/upSong/UpSong";
import { useStore } from "@features/store/useStore";
import { Box, Container as MuiContainer, useTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = { children: ReactNode };
const Layout = ({ children }: Props) => {
  const upSong = useStore((state) => state.upSong);

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
          paddingBottom: (theme) =>
            upSong
              ? `calc(${theme.components?.MuiBottomNavigation?.defaultProps
                  ?.style?.height} + ${theme.spacing(20)})`
              : "initial",
          height: (theme) => {
            const bottomNavigationHeight =
              theme.components?.MuiBottomNavigation?.defaultProps?.style
                ?.height;
            return `calc(100% - ${bottomNavigationHeight} - ${theme.spacing(
              1,
            )} )`;
          },
        }}
      >
        {children}
      </Box>
      {upSong && <UpSong />}
      <Navigation />
    </MuiContainer>
  );
};
export default Layout;
