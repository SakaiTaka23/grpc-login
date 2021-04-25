import { useContext, useEffect, useState } from 'react';
import { userInfo } from '../types/userType';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import NewUserServiceClient from '../api/UserServiceClient';
import { JWTContext } from '../context/jwtContext';

const useUser = () => {
  const { jwt } = useContext(JWTContext);
  const [user, setUser] = useState<userInfo>({
    email: 'none',
    name: 'none',
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    NewUserServiceClient(jwt).user(new Empty(), {}, (err, res) => {
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
