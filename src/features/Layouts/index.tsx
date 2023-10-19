import Navigation from "@features/Layouts/components/navigation/Navigation";
import Header from "@features/home/components/Header";
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
      className="relative flex h-[100dvh] max-h-[900px] flex-col"
      sx={{
        boxShadow: "0 0 10px -3px #000",
        paddingTop: (theme) => theme.spacing(2),
        display : "flex",
        flexDirection : "column"
      }}
    >
      <Header />
      <Box
        component={"main"}
        className="flex-1 overflow-auto"
        sx={{
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
