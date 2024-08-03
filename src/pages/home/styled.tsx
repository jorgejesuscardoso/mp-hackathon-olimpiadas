import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 9vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
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

export const ListEventsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
`;

export const ListCountriesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
`;

