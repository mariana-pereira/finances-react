import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Account = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-size: 25px;
`;

export const Title = styled.strong`
  color: ${(props) => props.theme.colors.text};
  font-size: 22px;
`;

export const Amount = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
`;

export const RevenueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Revenue = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  p {
    margin-top: 5px;
    color: ${(props) => props.theme.colors.text};
  }
`;
