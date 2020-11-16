import React from 'react';

import Layout from '../../layouts/main';

import CardContainer from '../../components/CardContainer';

import investmentIcon from '../../assets/icons/piggy.svg';
import accountIcon from '../../assets/icons/money.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';

import {
  Container, Icon, Amount, Title,
} from './styles';
import Card from '../../components/Card';

const Main: React.FC = () => (
  <Layout>
    <Container>
      <CardContainer>
        <Card>
          <Icon src={accountIcon} alt="account" />
          <Amount>R$ 200</Amount>
          <Title>Saldo em conta</Title>
        </Card>
        <Card>
          <Icon src={investmentIcon} alt="investments" />
          <Amount>R$ 200</Amount>
          <Title>Saldo investido</Title>
        </Card>
        <Card>
          <Icon src={invoiceIcon} alt="invoice" />
          <Amount>R$ 200</Amount>
          <Title>Total de faturas</Title>
        </Card>
      </CardContainer>
    </Container>
  </Layout>
);

export default Main;
