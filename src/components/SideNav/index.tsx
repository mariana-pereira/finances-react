import React from 'react';

import profile from '../../assets/images/profile.jpg';
import account from '../../assets/icons/account.svg';
import card from '../../assets/icons/card.svg';
import target from '../../assets/icons/target.svg';

import {
  Container, Header, Content, SideItem,
} from './styles';

const SideNav: React.FC = () => (
  <Container>
    <Header>
      <img src={profile} alt="user" />
      <h1>Mariana</h1>
      <span>Editar perfil</span>
    </Header>
    <Content>
      <SideItem>
        <img src={account} alt="account" />
        <span>Contas</span>
      </SideItem>
      <SideItem>
        <img src={card} alt="card" />
        <span>Cartões</span>
      </SideItem>
      <SideItem>
        <img src={target} alt="target" />
        <span>Objetivos</span>
      </SideItem>
    </Content>
  </Container>
);

export default SideNav;
