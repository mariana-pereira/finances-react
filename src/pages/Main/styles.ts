import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const CardContainer = styled.div`
  padding: 0 50px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  img {
    width: 32px;
  }

  h1 {
    color: #444;
  }

  span {
    color: #555;
  }
`;
