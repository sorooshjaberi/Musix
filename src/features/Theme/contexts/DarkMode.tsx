import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { PaletteMode } from "@mui/material";
export const darkModeCtx = createContext<{
  toggleMode: () => void;
  mode: PaletteMode;
}>({
  toggleMode: () => {},
  mode: "dark",
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);
  return (
    <darkModeCtx.Provider value={{ mode, toggleMode }}>
      {children}
    </darkModeCtx.Provider>
  );
};
