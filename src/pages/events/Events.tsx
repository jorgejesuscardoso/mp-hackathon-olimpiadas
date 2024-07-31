import { useEffect, useState } from 'react';
import { Container, Content } from './styled';

/* eslint-disable @typescript-eslint/no-explicit-any */
const EventsCards = ({ allEvents }: any) => {
  const [handleRenderer, setHandleRenderer] = useState([]);

  useEffect(() => {
    setHandleRenderer(allEvents);
  }, [allEvents]);

  const handleHour = (date: string) => {
    const hour = new Date(date).getHours().toString().padStart(2, '0');
    const minutes = new Date(date).getMinutes().toString().padStart(2, '0');

    const formattedHour = +hour % 12 || 12; 
    const period = +hour < 12 ? 'AM' : 'PM';

    return `${formattedHour.toString().padStart(2, '0')}:${minutes} ${period}`;
  };

  return (
    <Container>
      <h1>Events</h1>
      {
        handleRenderer.length > 0 && handleRenderer.map((event: any) => (
        <Content key={event.id}>
          <div>
            <h2>{event.discipline_name}</h2>
            <h3>Event: {event.event_name}</h3>
          </div>
          <div>
            <p><strong>Details:</strong> {event.detailed_event_name}</p>
            <p><strong>Medal Event:</strong> {event.is_medal_event !== 0 ? 'Yes' : 'No'}</p>
            <p><strong>Status:</strong> {event.status}</p>
            <img src={event.discipline_pictogram} alt="Event pictogram" />
          </div>
          <div>
            <p><strong>Venue:</strong> {event.venue_name}</p>
            <p><strong>Date:</strong> {event.day.split('-').reverse().join('/')}</p>
            <p><strong>Start Time:</strong> {handleHour(event.start_date)}</p>
            <p><strong>End Time:</strong> {handleHour(event.end_date)}</p>
          </div>

          <div>
            <h4>Competitors</h4>
            <ul>
              <div key={event.id}>
                {
                  event.competitors.map((competitor: any) => (
                    <li key={event.id}>
                      <div>
                        <img src={competitor.country_flag_url} alt="" />
                        <p>{competitor.competitor_name} {competitor.last_name}</p>
                        <p>Country: {competitor.country_id}</p>
                      </div>
                      <div>
                        <p>Result Mark: {competitor.result_mark}</p>
                        <p>Result Position: {competitor.result_position}</p>
                        <p>
                          Result Event:{competitor.result_winnerLoserTie === 'W' ? ' Winner' : competitor.result_winnerLoserTie === 'L' ? ' Looser' : ' Coming Soon'}
                        </p>
                      </div>
                    </li>
                  ))
                }
              </div>
            </ul>
          </div>
      </Content>
      ))
    }
    </Container>
  )
};

export default EventsCards;
