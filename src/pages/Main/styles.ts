import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  img {
    width: 32px;
  }

  h1 {
    color: ${(props) => props.theme.colors.text};
  }

  span {
    color: ${(props) => props.theme.colors.text};
  }
`;
