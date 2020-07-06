import React from 'react';

import Layout from '../../layouts/main';

import investmentIcon from '../../assets/icons/piggy.svg';
import accountIcon from '../../assets/icons/money.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';

import { Container, CardContainer, Card } from './styles';

const Main: React.FC = () => (
  <Layout>
    <Container>
      <CardContainer>
        <Card>
          <img src={accountIcon} alt="account" />
          <h1>R$ 200</h1>
          <span>Saldo em conta</span>
        </Card>
        <Card>
          <img src={investmentIcon} alt="investments" />
          <h1>R$ 200</h1>
          <span>Saldo investido</span>
        </Card>
        <Card>
          <img src={invoiceIcon} alt="invoice" />
          <h1>R$ 200</h1>
          <span>Total de faturas</span>
        </Card>
      </CardContainer>
    </Container>
  </Layout>
);

export default Main;
