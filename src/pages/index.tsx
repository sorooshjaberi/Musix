import { usePaletteMode } from "@features/Theme";
import { Box, Button, Typography, useTheme, Table } from "@mui/material";
import Head from "next/head";

export default function Home() {
  const { mode, toggleMode } = usePaletteMode();
  return (
    <>
      <Head>
        <title>Musix</title>
      </Head>
      <div className="h-[300vh]">home</div>
    </>
  );
}
