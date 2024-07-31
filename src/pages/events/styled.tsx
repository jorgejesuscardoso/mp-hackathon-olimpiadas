import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20vw;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    background-color: #f5f5f5;
    padding: 10px;
    width: 80vw;
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  margin: 10px;
  border: none;
  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.1);
`;
