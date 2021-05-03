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
  const [jwt, setJWT] = useState('');
  const [isChecking, setIsChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setJWT(token);
      setIsLoggedIn(true);
    }
    setIsChecking(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('jwt', jwt);
    setIsLoggedIn(true);
  }, [jwt]);

  const deleteJWT = () => {
    setJWT('');
    setIsLoggedIn(false);
  };

  return (
    <JWTContext.Provider value={{ jwt, setJWT, isChecking, isLoggedIn, deleteJWT }}>{children}</JWTContext.Provider>
  );
};

const useJWT = () => useContext(JWTContext);

export { JWTProvider, useJWT };
