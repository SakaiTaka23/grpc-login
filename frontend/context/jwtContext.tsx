import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

type JWTContextState = {
  jwt: string;
  setJWT: Dispatch<SetStateAction<string>>;
  deleteJWT: () => void;
};

const JWTContext = createContext({} as JWTContextState);

const JWTProvider: FC = ({ children }) => {
  const [jwt, setJWT] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setJWT(token);
  }, []);

  useEffect(() => {
    localStorage.setItem('jwt', jwt);
  }, [jwt]);

  const deleteJWT = () => {
    setJWT('');
  };

  return <JWTContext.Provider value={{ jwt, setJWT, deleteJWT }}>{children}</JWTContext.Provider>;
};

export { JWTContext, JWTProvider };
