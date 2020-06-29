import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Background = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
  }
`;

export const Content = styled.div`
  width: 40%;
  height: 100%;
  background: #695eb8;
  display: flex;
  align-items: center;
  justify-content: center;

    form {
      width: 400px;
      display: flex;
      flex-direction: column;
    }

    input {
      height: 44px;
      padding: 0 15px;
      border: 0;
      border-radius: 6px;
      margin: 0 0 10px;
    }

    button {
      height: 44px;
      padding: 0 15px;
      background: #333;
      color: #fff;
      border: 0;
      border-radius: 6px;
      margin: 5px 0 0;

      &:hover {
        background: ${darken(0.1, '#333')};
      }
    }

    a {
      margin-top: 10px;
      color: #fff;
      align-self: center;
    }
`;
