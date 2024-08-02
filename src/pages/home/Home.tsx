/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Container, Content, EventList, NextEventContainer } from './styled';
import { getAll } from '../../services/Api';
import { handleDate, handleHour } from '../../utils/helpers';

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
      const currentEvents = await getAll(`events?page=${finalPage}`);
      const filtered = currentEvents.data.filter((item: any) => item.status === 'Scheduled');
      setFilteredData(filtered);
    }

    filterData();
  }, [dataApi]);

  return (
    <Container> 
      <Content>
        <NextEventContainer>
          <h1>Next Events</h1>
          {filteredData.map((item: any) => (
            <EventList key={item.id}>
              <ul>
                <li>
                  <img src={item.discipline_pictogram} alt="" />
                </li>
                <li>
                  <strong>Sport:</strong> {item.discipline_name}
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
            </EventList>
          ))}
        </NextEventContainer>
      </Content>      
    </Container>
  );
}

export default Home;
