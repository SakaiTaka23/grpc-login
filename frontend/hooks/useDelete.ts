import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import NewAuthServiceClient from '../api/AuthServiceClient';
import { useJWT } from './useJWT';

const useDelete = () => {
  const { jwt, setJWT } = useJWT();

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
