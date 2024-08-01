/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Container } from './styled';
import { getAll } from '../../services/Api';

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
      <div>
        <h1>Next Events</h1>
        <div>
          {filteredData.map((item: any) => (
            <div key={item.id}>
              <h2>{item.status}</h2>
            </div>
          ))}
        </div>
      </div>
      
    </Container>
  );
}

export default Home;
