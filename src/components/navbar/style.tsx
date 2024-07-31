import { styled } from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  background-color: var(--navbar-bg-color);
  width: 100%;
  height: 7vh;
  top: 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20%;
    height: 100%;
    list-style-type: none;

    &:last-child {
      margin-right: 20px;
    }
  }

  li {
    text-align: center;
    margin-right: 10px;
    border-bottom: 2px solid transparent;
    padding: 7px;
    width: 100%;

      &:hover {
        cursor: pointer;
        border-bottom: 2px solid var(--navbar-border-color);
      }
  }

  a {
    display: block;
    text-decoration: none;
    color: var(--navbar-text-color);
    width: 100%;
  }

  img {
    height: 100%;
    border-radius: 50%;
  }
`;