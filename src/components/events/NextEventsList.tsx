/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getAll } from '../../services/Api';
import { ButtonsContainer, EventList, NextEventContainer } from './styled';
import { handleDate, handleHour } from '../../utils/helpers';

const NextEventsList = () => {
  const [dataApi, setDataApi] = useState<[]>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [finalPage, setFinalPage] = useState<number>(0);
  const [loading, setLoading] = useState('');
  const [sliceA, setSliceA] = useState(0);
  const [sliceB, setSliceB] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAll('events');
      setDataApi(response.data);
      setFinalPage(response.meta.last_page);
    };

      fetchData();
    }, []);

    useEffect(() => { 

    filterData();
  }, [dataApi, sliceA, sliceB]);

  const filterData = async () => {
    setLoading("Finding events...");
    const storage = localStorage.getItem('events');

    if (storage) {
      const {allEvents, expiry} = JSON.parse(storage);

      if (expiry > Date.now()) {
        setLoading('Events loaded from cache...');
        setFilteredData(allEvents.slice(sliceA, sliceB));
        setLoading('');
        return;
      }
    }

    let allEvents: any = [];
    let page = finalPage;
    try {
      while (allEvents.length < sliceB && page >= 0) {
        const response = await getAll(`events?page=${page}`);
        const scheduledEvents = response.data.filter(
            (item:any) => item.status === 'Scheduled'
        );
        allEvents = allEvents.concat(scheduledEvents);

        if (allEvents.length >= sliceB) break;
          page--;
      }
      setFilteredData(allEvents.slice(sliceA, sliceB));
      setLoading('');
      localStorage.setItem('events', JSON.stringify({allEvents, expiry: Date.now() + 300000}));
    } catch (error) {
        setLoading('Error loading events...');
        console.error('Erro ao carregar eventos:', error);
    }
  };
  return (
    <div>
      <NextEventContainer>
        <h1>Next Events:</h1>
        <div className='listcontainer'>
          {loading ? (<p className='loading'>{loading}</p>) : filteredData.length > 0 ? filteredData.map((item: any) => (
            <EventList key={item.id}>
              {                
                <ul>
                  <li className='card-img'>
                    <img src={item.discipline_pictogram} alt="" />
                  </li>
                  <li className='card-namesport'>
                    <strong></strong> {item.discipline_name}
                  </li>
                  <li className='card-date'>
                    <strong>Date:</strong> {handleDate(item.day)}
                  </li>
                  <li className='card-venue'>
                    <strong>Venue:</strong> {item.venue_name}
                  </li>
                  <li className='card-start'>
                    <strong>Start Time:</strong> {handleHour(item.start_date)}
                  </li>
                  <li className='card-end'>
                    <strong>End Time:</strong> {handleHour(item.end_date)}
                  </li>
                  <li className='card-countries'>
                    <strong>
                      Competitors: 
                    </strong>
                    {item.competitors.filter((s: any) => s.country_id).map((competitor: any) => competitor.country_id
                  ).join(', ')} 
                  </li>
                </ul>
              }
            </EventList>
          )) : filteredData.length === 0 ? <p>No events found</p> : null
          }
        </div>
      </NextEventContainer>        
        <ButtonsContainer>
        <span>Page: {sliceA / 6 + 1}</span>
          <div>
            <button
              onClick={() => {
                setSliceA(sliceA - 6);
                setSliceB(sliceB - 6);

              }}
              disabled={sliceA === 0}
            >
              <img src="prev_black.png" alt="Previous event list" />
            </button>
            <button
              onClick={() => {
                setSliceA(0);
                setSliceB(6);
              }}              
            >
              <img src="reset.png" alt="Resete events list" />
            </button>
            <button
              onClick={() => {
                setSliceA(sliceA + 6);
                setSliceB(sliceB + 6);
                filterData();
              }}
              disabled={filteredData.length < 6}
            >
              <img src="next_black.png" alt="Next event list" />
            </button>  
          </div>          
        </ButtonsContainer>
    </div>
  );
};

export default NextEventsList;