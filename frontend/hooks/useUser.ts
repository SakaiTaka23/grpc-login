import { useEffect, useState } from 'react';
import { LoginRequest } from '../proto/auth_pb';
import { UserServiceClient } from '../proto/UserServiceClientPb';
import { userInfo } from '../types/userType';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const useUser = () => {
  const [user, setUser] = useState<userInfo>({
    email: 'none',
    name: 'none',
  });

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    fetchUser(token);
  }, []);

  const fetchUser = (token: string) => {
    const client = new UserServiceClient('http://localhost:8080');
    client.user(new Empty(), { authorization: `bearer ${token}` }, (err, res) => {
      console.log(err, res);
      if (err === null) {
        const info = res.toObject();
        setUser(info);
      }
    });
  };

  return { user };
};

export default useUser;
