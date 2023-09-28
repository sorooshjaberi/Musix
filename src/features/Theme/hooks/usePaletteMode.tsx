import { darkModeCtx } from "@features/Theme/contexts/DarkMode";
import { useContext } from "react";

export const usePaletteMode = () => useContext(darkModeCtx);
