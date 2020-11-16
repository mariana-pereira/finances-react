import React from 'react';

import { Container } from './styles';

const CardContainer: React.FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default CardContainer;
