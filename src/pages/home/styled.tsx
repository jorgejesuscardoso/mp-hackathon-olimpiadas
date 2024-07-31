import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavigatesButtons = styled.div`
  position: fixed;
  background-color: #f0f0f0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
  padding: 5px 0;
  width: 100%;

  h4 {
    margin: 0 1vw;
    color: #08237a;
  }

  span {
    display: inline-block;
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 5px;
  }

  button {
    margin: 0 1vw;
    padding: 5px 10px;
    background-color: #f0f0f0;
    color: #08237a;
    border: 1px solid #08237a;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }

    &:disabled {
      cursor: not-allowed;
      color: #a0a0a0;
    }
  }    
`;
