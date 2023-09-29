import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { lightBlue, grey } from "@mui/material/colors";
import { nunito_sans } from "assets/font";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";
import { usePaletteMode } from "@features/Theme/hooks/usePaletteMode";
type Props = {
  children: ReactNode;
};
export const MuiCustomTheme = (props: Props) => {
  const { mode } = usePaletteMode();
  let theme = createTheme({
    typography: {
      fontFamily: nunito_sans.style.fontFamily,
      htmlFontSize: 10,
    },
    palette: {
      mode,
      primary: lightBlue,
      grey,
    },
    spacing: (factor: number) => `${factor * 0.4}rem`,
    components: {
      MuiBottomNavigation: {
        defaultProps: {
          style: {
            height: "60px",
          },
        },
      },
      MuiIcon: {
        defaultProps: {
          color: "primary",
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
