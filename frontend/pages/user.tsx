import React from 'react';
import useUser from '../hooks/useUser';

const User = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <h1>User Info</h1>
      <h1>{`Email : ${user.email}`}</h1>
      <h1>{`Name : ${user.name}`}</h1>
    </>
  );
};

export default User;
