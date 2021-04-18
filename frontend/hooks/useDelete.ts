import { AuthServiceClient } from '../proto/AuthServiceClientPb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const useDelete = () => {
  const requestDelete = (token: string) => {
    const client = new AuthServiceClient('http://localhost:8080');
    client.delete(new Empty(), { authorization: `bearer ${token}` }, (err, res) => {
      console.log(err);
      if (err === null) {
        localStorage.removeItem('jwt');
      }
    });
  };

  return { requestDelete };
};

export default useDelete;
