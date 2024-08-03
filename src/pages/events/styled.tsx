import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 12vh;
  gap: 5px;

  margin-bottom: 8vh;  
`;

export const Card = styled.div`
  background-color: var(--card-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 55vw;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px rgba(0, 4, 37, 0.3);
`;

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 26%;
  margin: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 3px 1px rgba(0, 4, 37, 0.3);
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--card-border-color);

  h2 {
    color: var(--card-text-color-2);
    font-size: var(--font-size-h2);
  }

  h3 {
    color: var(--card-text-color-2);
    font-size: var(--font-size-h3);
  }

  p {
    color: var(--card-text-color-2);
    font-size: var(--font-size-p);
  }

  img {
    width: 5vw;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 10px;
  gap: 5px;  

  div {
    display: flex;
    flex-direction: column;
    width: 35%;
    gap: 5px;
  }

  div.time-card {
    width: 22%;
  }

  div.avenue-card {
    width: 43%;
  }

  p {
    color: var(--card-text-color-2);
    font-size: var(--font-size-p);
    width: 100%;
  }
`;

export const Competitors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  h4 {
    margin: 10px;
  }

  div.competitors-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 15px;
    
    p {
      text-align: center;
      color: var(--card-text-color-2);
      font-size: var(--font-size-p);
      width: 100%;
    }

    strong {
      color: var(--card-text-strong-color);
      font-size: var(--font-size-p);
    }
  }

  div.country-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30vh;

    img {
      border: 1px solid var(--card-border-color);
      border-radius: 10%;
      width: 70%;
      margin-bottom: 10px;
    }
  }

  div.results-card {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-top: 1px solid var(--card-border-color);
    padding-top: 15px;
    width: 100%;
    height: 8vh;
  }

  img {
    width: 10vw;
  }
`;

export const NavigatesButtons = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
  padding: 3px 0;
  width: 100%;

  h4 {
    margin: 0 1vw;
    color: var(--card-text-color-1);
  }

  span {
    display: inline-block;
    padding: 5px 10px;
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--card-text-color-1);
    border-radius: 5px;
  }

  button {
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      color: #a0a0a0;
    }
  }

  select {
    margin: 0 1vw;
    background-color: #f0f0f0;
    color: var(--card-text-color-1);
    border: 1px solid var(--card-text-color-1);
    border-radius: 5px;
    outline: none;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  img {
    background-color: none;
    width: 1vw;
  }
`;