import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(${(props) => props.theme.gradient});
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${(props) => props.theme.colors.text}
  }
`;
