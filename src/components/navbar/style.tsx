import { styled } from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  background-color: var(--navbar-bg-color);
  background-image: url('logo_color.svg');
  background-size: 70%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 9vh;
  top: 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.nav-hider {
    display: none;
  }

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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--body-bg-color);
    text-align: center;
    border-radius: 50%;

      &:hover {
        cursor: pointer;
      }
  }

  h3 {
    color: var(--navbar-text-color);
    font-size: var(--font-size-h3);
    font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: var(--font-size-a);
    font-weight: bold;
    color: var(--navbar-text-color);
    padding: 10px;
    width: 100%;
    height: 50px;
    border-radius: 50%;
    border-bottom: 2px solid transparent;

    &:hover {
        color: var(--navbar-text-hover-color);
      }
  }

  img {
    height: 100%;
    cursor: pointer;
  }
`;