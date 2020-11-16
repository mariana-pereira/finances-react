import React from 'react';

import { Container } from './styles';

const Card: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Card;
