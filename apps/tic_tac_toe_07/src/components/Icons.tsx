import React, { PropsWithChildren } from 'react';
import { FontAwesomeFreeSolid } from '@react-native-vector-icons/fontawesome-free-solid';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case 'circle':
      return <FontAwesomeFreeSolid name="circle" size={38} color="#F7CD2E" />;
    case 'cross':
      return <FontAwesomeFreeSolid name="times" size={38} color="#f52408" />;
    default:
      return <FontAwesomeFreeSolid name="pencil" size={38} color="#4245cc" />;
  }
};

export default Icons;
