import React from 'react';

import authImage from '../../assets/images/finances.svg';

import { Container, Background, Content } from './styles';

const AuthLayout: React.FC = ({ children }) => (
  <Container>
    <Background>
      <img src={authImage} alt="auth" />
    </Background>
    <Content>{children}</Content>
  </Container>
);

export default AuthLayout;
