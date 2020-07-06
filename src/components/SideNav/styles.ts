import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  width: 260px;
  height: 100%;
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #fff;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  h1 {
    color: #444;
    margin: 10px 0;
  }

  span {
    margin-top: 10px;
    color: #444;
  }
`;

export const Content = styled.div``;

export const SideItem = styled.div`
  padding: 0 30px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #fff;

  img {
    width: 32px;
  }

  span {
    margin-right: 50px;
    font-size: 16px;
    color: #444;
  }
`;
