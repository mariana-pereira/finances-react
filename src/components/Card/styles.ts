import styled from 'styled-components';

import { CardProps } from '.';

export const Container = styled.div<CardProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`;
