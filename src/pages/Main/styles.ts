import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Icon = styled.img`
  width: 32px;
`;

export const Amount = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.text};
`;
