import { styled } from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  background-color: var(--navbar-bg-color);
  background-image: url('logo_color.svg');
  background-size: 70%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 10vh;
  top: 0;
  padding: 6px;
  display: flex;
  justify-content: end;
  align-items: center;

  &.nav-hider {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 23%;
    height: 100%;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--body-bg-color);
    text-align: center;
    border-radius: 50%;
    height: 100%;

      &:hover {
        cursor: pointer;
        background-color: var(--navbar-bg-hover-color);
      }
  }

  li.cube {
    border-radius: 20%;
    border:none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: var(--font-size-p);
    font-weight: bold;
    color: var(--navbar-text-color);
    padding: 7px;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &:hover {
        color: #fff;
      }
  }

  img {
    position: absolute;
    top: 3px;
    left: 1%;
    height: 90%;
    cursor: pointer;
  }
`;