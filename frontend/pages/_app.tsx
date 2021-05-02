import { useEffect } from 'react';
import NavBar from '../components/molecules/NavBar';
import { JWTProvider } from '../context/jwtContext';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <JWTProvider>
      <NavBar />
      <Component {...pageProps} />
    </JWTProvider>
  );
};

export default App;
