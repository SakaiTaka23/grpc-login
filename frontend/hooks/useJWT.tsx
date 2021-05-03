import { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';

type JWTContextState = {
  jwt: string;
  setJWT: Dispatch<SetStateAction<string>>;
  deleteJWT: () => void;
};

const JWTContext = createContext({} as JWTContextState);

const JWTProvider: FC = ({ children }) => {
  const [jwt, setJWT] = useState('');
  console.log(jwt);

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

const useJWT = () => useContext(JWTContext);

export { JWTProvider, useJWT };
