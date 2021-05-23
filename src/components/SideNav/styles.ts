import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  width: 260px;
  height: 100%;
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.background};

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  h1 {
    color: ${(props) => props.theme.colors.text};
    margin: 10px 0;
  }

  span {
    margin-top: 10px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Content = styled.div``;

export const SideItem = styled.div`
  padding: 0 30px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.background};

  img {
    width: 32px;
  }

  span {
    margin-right: 50px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }
`;
