import { JWTProvider } from '../context/jwtContext';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <JWTProvider>
      <Component {...pageProps} />
    </JWTProvider>
  );
};

export default App;
