import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Details = styled.div`
  width: 700px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

export const AddButton = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 5px;
  color: #fff;
  font-weight: bold;
`;

export const Amount = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors.text};
  }

  span {
    color: ${(props) => props.theme.colors.text};
    margin-top: 30px;
  }
`;

export const Revenue = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  padding: 0 20px;

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 22px;
      color: ${(props) => props.theme.colors.text};
    }

    span {
      margin-top: 20px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;
