import React from 'react';
import OnClickButton from '../components/molecules/OnClickButton';

const Logout = () => {
  const deleteToken = () => {
    localStorage.removeItem('jwt');
  };

  return (
    <>
      <h1>Do You Really Want To Logout?</h1>
      <OnClickButton buttonText='Logout' onClickEvent={deleteToken} />
    </>
  );
};

export default Logout;
