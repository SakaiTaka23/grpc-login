import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { useEffect, useMemo } from 'react';
import NavBar from '../components/organisms/pages/NavBar';
import { JWTProvider } from '../context/jwtContext';
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
        <NavBar />
        <Component {...pageProps} />
      </JWTProvider>
    </ThemeProvider>
  );
};

export default App;
