import React from 'react';

import {
  Container, Details, AddButton, Amount, Revenue,
} from './styles';

const Summary: React.FC = () => (
  <Container>
    <Details>
      <Amount>
        <h1>Saldo Total</h1>
        <span>R$ 2000,00</span>
      </Amount>
      <Revenue>
        <div>
          <strong>entrada</strong>
          <span>+ R$500,00</span>
        </div>
        <div>
          <strong>saída</strong>
          <span>- R$48,00</span>
        </div>
      </Revenue>
    </Details>
    <AddButton>Adicionar conta</AddButton>
  </Container>
);

export default Summary;
