import { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';

type JWTContextState = {
  jwt: string;
  setJWT: Dispatch<SetStateAction<string>>;
  isLoggedIn: boolean;
  isChecking: boolean | undefined;
  deleteJWT: () => void;
};

const JWTContext = createContext({} as JWTContextState);

const JWTProvider: FC = ({ children }) => {
  const [jwt, setJWT] = useState<undefined | string>(undefined);
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setJWT(token);
  }, []);

  useEffect(() => {
    if (jwt === undefined) return;
    if (jwt) {
      setIsLoggedIn(true);
      localStorage.setItem('jwt', jwt);
    } else {
      setIsLoggedIn(false);
    }
    setIsChecking(false);
  }, [jwt]);

  const deleteJWT = () => {
    setJWT('');
  };

  return (
    <JWTContext.Provider value={{ jwt, setJWT, isChecking, isLoggedIn, deleteJWT }}>{children}</JWTContext.Provider>
  );
};

const useJWT = () => useContext(JWTContext);

export { JWTProvider, useJWT };
