import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
`;

export const Main = styled.div`
`;
