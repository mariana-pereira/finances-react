import React from 'react';

import Layout from '../../layouts/main';

import { Container, CardContainer, Card } from './styles';

const Accounts: React.FC = () => (
  <Layout>
    <Container>
      <h1>Accounts</h1>
      <CardContainer>
        <Card>
          <h4>Nubank</h4>
          <strong>Balance</strong>
          <span>R$ 100,00</span>
        </Card>
      </CardContainer>
    </Container>
  </Layout>
);

export default Accounts;
