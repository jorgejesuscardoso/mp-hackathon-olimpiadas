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
    setLoading("Finding events...");
    const storedItem = localStorage.getItem('events');
    const expiryStorage = storedItem ? JSON.parse(storedItem) : { allEvents: [], expiry: 0 };
    const isExpired = expiryStorage.expiry <= Date.now();

    if (!isExpired && expiryStorage.allEvents.length > 0) {
        setLoading('Found events in cache...');
        setTimeout(() => {
          setFilteredData(expiryStorage.allEvents.slice(0, 6));
          setLoading('');
        }, 1000);
        return;
    }   

    filterData();
}, [dataApi]);

  const filterData = async () => {
    let allEvents: any = [];
    let page = finalPage;
    const desiredCount = 6;
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
            expiry: Date.now() + 300000
        }));
        setTimeout(() => {
          setFilteredData(allEvents.slice(0, desiredCount));
          setLoading('');
        }, 1000);
    } catch (error) {
        setLoading('Error loading events...');
        console.error('Erro ao carregar eventos:', error);
    }
  };

  return (
    <Container>  
      <PromoImgContainer>
        <SlideShow />
      </PromoImgContainer>
      <Content>
        <NextEventContainer>
          <h1>Next Events:</h1>
          {loading ? (<p className='loading'>{loading}</p>) : filteredData.map((item: any) => (
            <EventList key={item.id}>
              {                
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
                  <li>
                    <strong>
                      Countries: 
                    </strong>
                    {item.competitors.filter((s: any) => s.country_id).map((competitor: any) => competitor.country_id
                  ).join(', ')} 
                  </li>
                </ul>
              }
            </EventList>
          )).slice(0, 6)}
         
        </NextEventContainer>
      </Content>      
    </Container>
  );
}

export default Home;
