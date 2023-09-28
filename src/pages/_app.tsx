import Layout from "@features/Layouts";
import { DarkModeProvider, MuiCustomTheme } from "@features/Theme";
import "assets/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <MuiCustomTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiCustomTheme>
    </DarkModeProvider>
  );
}
