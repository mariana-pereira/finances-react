import React from 'react';

import Header from '../../components/Header';
import SideNav from '../../components/SideNav';

import { Container, Content, Main } from './styles';

const MainLayout: React.FC = ({ children }) => (
  <Container>
    <Header />
    <Content>
      <SideNav />
      <Main>
        {children}
      </Main>
    </Content>
  </Container>
);

export default MainLayout;
