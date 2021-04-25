import { Button } from '@material-ui/core';
import React, { FC } from 'react';

type Prop = {
  buttonText: string;
  onClickEvent: () => void;
};

const OnClickButton: FC<Prop> = ({ buttonText, onClickEvent }) => {
  return (
    <Button variant='outlined' onClick={onClickEvent}>
      {buttonText}
    </Button>
  );
};

export default OnClickButton;
