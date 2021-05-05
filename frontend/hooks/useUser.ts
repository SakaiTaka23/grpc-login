import { useEffect, useState } from 'react';
import { userInfo } from '../types/userType';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import NewUserServiceClient from '../api/UserServiceClient';
import { useJWT } from './useJWT';
import useRequiredLogin from './useRequiredLogin';

const useUser = () => {
  useRequiredLogin();
  const { jwt } = useJWT();
  const [user, setUser] = useState<userInfo>({
    email: 'none',
    name: 'none',
  });

  useEffect(() => {
    if (jwt) {
      fetchUser();
    }
  }, [jwt]);

  const fetchUser = () => {
    NewUserServiceClient(jwt).user(new Empty(), {}, (err, res) => {
      if (err === null) {
        const info = res.toObject();
        setUser(info);
      }
    });
  };

  return { user };
};

export default useUser;
