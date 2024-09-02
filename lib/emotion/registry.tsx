import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { FC, ReactNode } from "react";
import type { Options } from "@emotion/cache";
import type { Theme } from "@mui/material/styles";
import type { Theme as EmotionTheme } from "@emotion/react";

import EmotionThemeProvider from "./theme";

export interface EmotionRegistryProps {
  children: ReactNode;
  cacheOptions?: Partial<Options> & {
    key: string;
  };
  muiTheme?: Partial<Theme>;
  emotionTheme?: Partial<EmotionTheme>;
}

const EmotionRegistry: FC<EmotionRegistryProps> = ({
  children,
  cacheOptions = { key: "mui" },
  muiTheme = {},
  emotionTheme = {},
}) => {
  const emotionCache = createCache(cacheOptions);

  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={emotionTheme}>
          <CssBaseline />
          {children}
        </EmotionThemeProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default EmotionRegistry;
