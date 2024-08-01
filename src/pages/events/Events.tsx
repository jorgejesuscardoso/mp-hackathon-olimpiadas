import { useEffect, useState } from 'react';
import { CardInfo, Competitors, Container, Card, CountryContainer, HeaderCard, NavigatesButtons } from './styled';
import { getAll } from '../../services/Api';
import Swal from 'sweetalert2';

/* eslint-disable @typescript-eslint/no-explicit-any */
const EventsCards = () => {
  const goldenMedal = '🥇';
  const silverMedal = '🥈';
  const bronzeMedal = '🥉';

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

  const handleHour = (date: string) => {
    const hour = new Date(date).getHours().toString().padStart(2, '0');
    const minutes = new Date(date).getMinutes().toString().padStart(2, '0');

    const formattedHour = +hour % 12 || 12; 
    const period = +hour < 12 ? 'AM' : 'PM';

    return `${formattedHour.toString().padStart(2, '0')}:${minutes} ${period}`;
  };

  const getResultPositionText = (position: string) => {
    switch (position) {
      case '1':
        return `1st ${goldenMedal}`;
      case '2':
        return `2nd ${silverMedal}`;
      case '3':
        return `3rd ${bronzeMedal}`;
      default:
        return '';
    }
  };

  const getResultEventText = (result: string | undefined) => {
    switch (result) {
      case 'W':
        return 'Winner';
      case 'L':
        return 'Loser';
      default:
        return 'Coming Soon';
    }
  };

  const handlePageChange = (newPage: number) => {
    Swal.fire({
      title: 'Wait!',
      text: `Loading page ${newPage}...`,
      icon: 'question',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
    });
    setPage(newPage);
  };

  return (
    <Container>
      {
        allEvents.length > 0 && allEvents.map((event: any) => (
        <Card key={event.id}>
          <HeaderCard>
            <img src={event.discipline_pictogram} alt="Event pictogram" />
            <h2>{event.discipline_name}</h2>
            <h3>{event.event_name}</h3>
            <p><strong>Status:</strong> {event.status}</p>
          </HeaderCard>

          <CardInfo>
            <div className='avenue-card'>              
              <p><strong>Details:</strong> {event.detailed_event_name}</p>
              <p>
                <strong>Medal Event:</strong> {event.is_medal_event !== 0 ? 'Yes' : 'No'}
              </p>
            </div>

            <div>
              <p><strong>Venue:</strong> {event.venue_name}</p>
              <p><strong>Date:</strong> {event.day.split('-').reverse().join('/')}</p>
            </div>

            <div className='time-card'>
              <p><strong>Start Time:</strong> {handleHour(event.start_date)}</p>
              <p><strong>End Time:</strong> {handleHour(event.end_date)}</p>
            </div>
          </CardInfo>

          <Competitors>
            <div key={event.id} className='competitors-content'>
              {
                event.competitors.sort((a: any, b: any) => b.result_mark - a.result_mark).filter((s: any) => s.country_flag_url).map((competitor: any) => (
                  <CountryContainer>
                    <div
                      key={competitor.country_flag_url}
                      className='country-card'
                    >
                      <img 
                        src={competitor.country_flag_url} alt=""
                      />                
                      <p><strong>Country:</strong> {competitor.country_id}</p>                  
                      <p>
                        <strong>Athlete:</strong> {competitor.competitor_name}
                      </p>
                    </div>
                    
                    <div className='results-card'>
                      {competitor.result_mark ? (
                        <p>
                          <strong>Result Mark:</strong> {competitor.result_mark}
                        </p>
                        
                        ) : ''}
                      {
                        competitor.result_position ? (
                        <p>
                          <strong>Result Position:</strong> {getResultPositionText(competitor.result_position)}
                        </p>) : ''
                      }
                      {
                        competitor.result_winnerLoserTie ? (
                          <p>
                            <strong>Result Event:</strong> {getResultEventText(competitor.result_winnerLoserTie)}
                          </p>
                        ) : null
                      }
                    </div>
                  </CountryContainer>
                ))
              }
            </div>
          </Competitors>
      </Card>
      ))
    }
    <NavigatesButtons>
      <button
        onClick={() => handlePageChange(1)}
        disabled={page === 1}
      >
        {'<<'}
      </button>
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        {'<'}
      </button>

      <span>Page</span>
      
      <select
        name="pages"
        id="page"
        value={page}
        onChange={(e) => handlePageChange(+e.target.value)}
      >
        {Array.from({ length: finalPage || 1 }, (_, i) => i + 1).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <span>of {finalPage}</span>

      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === finalPage}
      >
        {'>'}
      </button>

      <button
        onClick={() => handlePageChange(finalPage || 1)}
        disabled={page === finalPage}
      >
        {'>>'}
      </button>

    </NavigatesButtons>
    </Container>
  )
};

export default EventsCards;
