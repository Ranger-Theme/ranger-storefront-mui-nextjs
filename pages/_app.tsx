import type { AppProps } from "next/app";
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "@/config/theme";
import { createCache } from "@/utils/createCache";
import GlobalStyled from "@/components/GlobalStyled";
import Header from "@/components/Header";

const emotionCache = createCache();

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider emotionCache={emotionCache} {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyled />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
