/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getAll } from '../../services/Api';
import { Container, NavigatesButtons } from './styled';
import EventsCards from '../events/Events';

const Home = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [finalPage, setFinalPage] = useState();

  useEffect(() => {
    fetchAllEvents();
    handleScroll();
  }, [page]);

  useEffect(() => {
    handleEndPage();
  }, []);

  const fetchAllEvents = async () => {
    const fetch = await getAll(`events?page=${page}`);
    setAllEvents(fetch.data);
  };

  const handleEndPage = async () => {
    const fetch = await getAll(`events?page=${page}`);
    const splitPage = fetch.links.last.split('=')[1];
    setFinalPage(splitPage);
    setPage(splitPage);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Container>
      <div>
        <EventsCards
          allEvents={allEvents}
        />        
      </div>

      <NavigatesButtons>
        <h4>Current Page: <span>{page}</span></h4>        
        <button
          onClick={() => {
            setPage(page && page - 1);
          }}>
            {'<<< '} Previous
        </button>
        <button
          onClick={() => { 
            setPage(page && page + 1);
          }}
          disabled={page === finalPage}
        >
          Next{' >>>'}
        </button>       
      </NavigatesButtons>
    </Container>
  );
}

export default Home;
