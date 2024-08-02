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
  const [loading, setLoading] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAll('events');
      setDataApi(response.data);
      setFinalPage(response.meta.last_page);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedItem = localStorage.getItem('events');
    const expiryStorage = storedItem ? JSON.parse(storedItem) : { allEvents: [], expiry: 0 };
    const isExpired = expiryStorage.expiry <= Date.now();

    if (!isExpired && expiryStorage.allEvents.length > 0) {
        setFilteredData(expiryStorage.allEvents.slice(0, 6));
        return;
    }

    const filterData = async () => {
        let allEvents: any = [];
        let page = finalPage;
        const desiredCount = 6;
        setLoading("Finding events...");

        try {
            while (allEvents.length < desiredCount && page >= 0) {
                const response = await getAll(`events?page=${page}`);
                const scheduledEvents = response.data.filter(
                    (item:any) => item.status === 'Scheduled'
                );
                allEvents = allEvents.concat(scheduledEvents);

                if (allEvents.length >= desiredCount) break;
                page--;
            }

            localStorage.setItem('events', JSON.stringify({ 
                allEvents,
                expiry: Date.now() + 60000 // Expiração em 60 segundos
            }));
            setFilteredData(allEvents.slice(0, desiredCount));
        } catch (error) {
            console.error('Erro ao carregar eventos:', error);
        } finally {
            setLoading('');
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
                ) : loading ? (
                  <p>{loading}</p>
                ) : (
                  <p>No events found</p>
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
