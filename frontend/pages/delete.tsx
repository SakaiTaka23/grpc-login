import { Button } from '@material-ui/core';
import React from 'react';
import OnClickButton from '../components/molecules/OnClickButton';
import useDelete from '../hooks/useDelete';

const Delete = () => {
  const { requestDelete } = useDelete();

  return (
    <>
      <h1>Do You Really Want To Delete Account?</h1>
      <OnClickButton buttonText='Delete' onClickEvent={requestDelete} />
    </>
  );
};

export default Delete;
