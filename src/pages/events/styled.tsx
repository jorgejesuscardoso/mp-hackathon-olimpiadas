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
    width: 60vw;
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 60vw;
  margin: 10px;
  border: none;
  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
