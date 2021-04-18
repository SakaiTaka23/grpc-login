import { useEffect, useState } from 'react';
import { LoginRequest } from '../proto/auth_pb';
import { UserServiceClient } from '../proto/UserServiceClientPb';
import { userInfo } from '../types/userType';

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
    const request = new LoginRequest();
    client.user(request, { authorization: `bearer ${token}` }, (err, res) => {
      const info: userInfo = {
        email: res.getEmail(),
        name: res.getName(),
      };
      setUser(info);
    });
  };

  return { user };
};

export default useUser;
