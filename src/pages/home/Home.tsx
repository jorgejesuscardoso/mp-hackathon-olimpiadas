/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Container, Content, EventList, NextEventContainer, PromoImgContainer } from './styled';
import { getAll } from '../../services/Api';
import { handleDate, handleHour } from '../../utils/helpers';
import SlideShow from '../../components/slide/Slide';

const Home = () => {
  const [dataApi, setDataApi] = useState<[]>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [finalPage, setFinalPage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAll('events');
      setDataApi(response.data);
      setFinalPage(response.meta.last_page);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterData = async () => {
      let allEvents: any = [];
      let page = finalPage;
      const desiredCount = 6;
  
      try {
        while (allEvents.length < desiredCount && page >= 0) {
          // Faz a chamada para a API
          const response = await getAll(`events?page=${page}`);
          
          // Filtra eventos agendados e adiciona à lista
          const scheduledEvents = response.data.filter(
            (item: any) => item.status === 'Scheduled'
          );
          allEvents = allEvents.concat(scheduledEvents);
  
          // Verifica se já atingiu a quantidade desejada
          if (allEvents.length >= desiredCount) break;
  
          // Decrementa a página para buscar a próxima
          page--;
        }
  
        // Define o estado com os eventos filtrados, limitando ao desiredCount
        setFilteredData(allEvents.slice(0, desiredCount));
      } catch (error) {
        console.error('Erro ao carregar eventos:', error);
      }
    };
  
    filterData();
  }, [dataApi]);

  return (
    <Container>  
      <PromoImgContainer>
        <SlideShow />
      </PromoImgContainer>
      <Content>
        <NextEventContainer>
          <h1>Next Events:</h1>
          {filteredData.map((item: any) => (
            <EventList key={item.id}>
              {
                item.start_date ? (
                  <ul>
                    <li>
                      <img src={item.discipline_pictogram} alt="" />
                    </li>
                    <li>
                      <strong></strong> {item.discipline_name}
                    </li>
                    <li>
                      <strong>Date:</strong> {handleDate(item.day)}
                    </li>
                    <li>
                      <strong>Venue:</strong> {item.venue_name}
                    </li>
                    <li>
                      <strong>Start Time:</strong> {handleHour(item.start_date)}
                    </li>
                    <li>
                      <strong>End Time:</strong> {handleHour(item.end_date)}
                    </li>
                  </ul>
                ) : (
                  <p>No events scheduled</p>
                )
              }
            </EventList>
          )).slice(0, 6)}
         
        </NextEventContainer>
      </Content>      
    </Container>
  );
}

export default Home;
