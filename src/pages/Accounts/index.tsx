import React from 'react';
import Card from '../../components/Card';
import CardContainer from '../../components/CardContainer';

import Layout from '../../layouts/main';

import {
  Container, Account, Title, Amount, RevenueContainer, Revenue,
} from './styles';

const Accounts: React.FC = () => (
  <Layout>
    <Container>
      <CardContainer>
        <Card width="250px" height="250px">
          <Account>Nubank</Account>
          <Title>Saldo</Title>
          <Amount>R$ 500,00</Amount>
          <RevenueContainer>
            <Revenue>
              <Amount>entrada</Amount>
              <p>+ R$48,00</p>
            </Revenue>
            <Revenue>
              <Amount>saída</Amount>
              <p>- R$5,00</p>
            </Revenue>
          </RevenueContainer>
        </Card>
        <Card width="250px" height="250px">
          <Account>Nubank</Account>
          <Title>Saldo</Title>
          <Amount>R$ 500,00</Amount>
          <RevenueContainer>
            <Revenue>
              <Amount>entrada</Amount>
              <p>+ R$48,00</p>
            </Revenue>
            <Revenue>
              <Amount>saída</Amount>
              <p>- R$5,00</p>
            </Revenue>
          </RevenueContainer>
        </Card>
        <Card width="250px" height="250px">
          <Account>Nubank</Account>
          <Title>Saldo</Title>
          <Amount>R$ 500,00</Amount>
          <RevenueContainer>
            <Revenue>
              <Amount>entrada</Amount>
              <p>+ R$48,00</p>
            </Revenue>
            <Revenue>
              <Amount>saída</Amount>
              <p>- R$5,00</p>
            </Revenue>
          </RevenueContainer>
        </Card>
      </CardContainer>
    </Container>
  </Layout>
);

export default Accounts;
