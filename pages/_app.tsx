import { type AppProps as NextAppProps } from 'next/app';
import { CacheProvider, type EmotionCache } from '@emotion/react';
import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  ThemeProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material';
import { FC } from 'react';
import { themeOptions } from '@/app/theme';
import { createEmotionCache } from '@/app/createEmotionCache';
import { Layout } from '@/shared';

const theme = extendTheme(themeOptions);
const clientSideEmotionCache = createEmotionCache();

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}
const App: FC<AppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <CssVarsProvider defaultMode={'light'} theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CssVarsProvider>
    </CacheProvider>
  );
};

export default App;
