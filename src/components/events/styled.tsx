import { styled } from 'styled-components';


export const NextEventContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 62%;
  gap: 1px;
`;

export const NextEventContainer = styled.div`
  background-color: var(--bg-gray);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  padding: 10px;
  gap: 1px;

  h1 {
    margin-bottom: 5px;
    width: 100%;
    color: var(--text-color-black);
    font-size: var(--font-size-h2);
  }

  p.loading {
    color: var(--text-color-black);
    font-size: var(--font-size-p);
  }

  div.listcontainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    height: 93%;
    width: 100%;
  }
`;

export const EventList = styled.div`
  background-color: var(--list-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      color: var(--text-color-white);
      font-size: var(--font-size-p);
      gap: 3px;

      img {
        width: 30px;
      }

      p {
        width: 100%;
      }
    }

    li.card-img {
      width: 3%;
    }

    li.card-namesport {
      width: 17%;
    }

    li.card-date {
      width: 10%;
    }

    li.card-venue {
      width: 22%;
    }

    li.card-start {
      width: 13%;
    }

    li.card-end {
      width: 12%;
    }

    li.card-countries {
      width: 22%;
    }
  }

  strong {
    color: darkblue;
  }

  p {
    color: var(--text-color-white);
  }

`;

export const ButtonsContainer = styled.div`
  background-color: var(--bg-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: var(--button-bg-color);
    color: var(--text-color-white);
    font-size: var(--font-size-p);
    cursor: pointer;
    transition: 0.3s;

    img {
      width: 15px;
    }

    &:hover {
      background-color: var(--button-bg-hover-color);
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 10px;
    margin-right: 4%;
  }

  span {
    color: var(--text-color-black);
    font-size: var(--font-size-p);
    font-weight: bold;
  }
`;
