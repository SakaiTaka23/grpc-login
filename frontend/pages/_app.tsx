import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { useEffect, useMemo } from 'react';
import NavBar from '../components/organisms/navbar/NavBar';
import { JWTProvider } from '../hooks/useJWT';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <JWTProvider>
        <CssBaseline />
        <NavBar />
        <Component {...pageProps} />
      </JWTProvider>
    </ThemeProvider>
  );
};

export default App;
