import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { useContext } from 'react';
import { JWTContext } from '../context/jwtContext';
import NewAuthServiceClient from '../api/client/AuthServiceClient';

const useDelete = () => {
  const { jwt, setJWT } = useContext(JWTContext);

  const requestDelete = () => {
    NewAuthServiceClient(jwt).delete(new Empty(), {}, (err, res) => {
      if (!err) {
        setJWT('');
      } else {
        console.log(err.message);
      }
    });
  };

  return { requestDelete };
};

export default useDelete;
