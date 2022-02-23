import React from 'react';

import { Container } from './styles';

const Centered: React.FC = ({ children }) => {
  return <Container data-testid="centered">{children}</Container>;
};

export default Centered;
