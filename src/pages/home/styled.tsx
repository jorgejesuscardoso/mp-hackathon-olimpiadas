import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 9vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
`;

export const NextEventContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 62%;
  gap: 1px;
`;

export const NextEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 10px;
  gap: 1px;

  h1 {
    margin-top: 20px;
    width: 100%;
    color: var(--text-color-black);
    font-size: var(--font-size-h2);
  }
`;

export const EventList = styled.div`
  background-color: var(--list-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-shadow: 1px 1px 3px 1px var(--border-list-color);

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 42.75px;
      padding: 0 10px;
      color: var(--text-color-white);
      font-size: var(--font-size-smallest);
      gap: 3px;

      img {
        width: 30px;
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

export const PromoImgContainer = styled.div`
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  div#carouselExampleIndicators {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;

