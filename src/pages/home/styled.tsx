import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 9.4vh;
  width: 95vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const NextEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 1px solid var(--border-color);
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      padding: 0 10px;
      color: var(--text-color-white);
      font-size: var(--font-size-p);
      gap: 3px;

      img {
        width: 40px;
      }

      p {
        width: 100%;
      }
    }
  }

  strong {
    color: darkblue;
  }

  p {
    color: var(--text-color-white);
  }
`;

