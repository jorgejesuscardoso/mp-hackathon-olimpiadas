/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Content, ListCountriesSection, ListEventsSection, PromoImgContainer } from './styled';
import SlideShow from '../../components/slide/Slide';
import NextEventsList from '../../components/events/NextEventsList';
import Coutries from '../../components/countries/Countries';

const Home = () => {
  

  return (
    <Container>  
      <PromoImgContainer>
        <SlideShow />
      </PromoImgContainer>
      <Content>
        <ListEventsSection>
          <NextEventsList />
        </ListEventsSection>
        <ListCountriesSection>
          <Coutries />
        </ListCountriesSection>
      </Content>      
    </Container>
  );
}

export default Home;
