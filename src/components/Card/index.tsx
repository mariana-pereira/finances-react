import React from 'react';

import { Container } from './styles';

export interface CardProps {
  width: string;
  height: string;
}

const Card: React.FC<CardProps> = ({ children, width, height }) => (
  <Container width={width} height={height}>
    {children}
  </Container>
);

export default Card;
