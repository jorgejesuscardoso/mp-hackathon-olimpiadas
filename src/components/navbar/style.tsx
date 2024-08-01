import { styled } from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  background-color: var(--navbar-bg-color);
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
    text-align: center;
    width: 100%;

      &:hover {
        cursor: pointer;
        color: var(--navbar-text-hover-color);
      }
  }

  a {
    display: block;
    text-decoration: none;
    font-size: var(--font-size-a);
    font-weight: bold;
    color: var(--navbar-text-color);
    width: 100%;
    height: 100%;
    border-bottom: 2px solid transparent;
    &:hover {
        color: var(--navbar-text-hover-color);
        border-bottom: 2px solid var(--navbar-text-hover-color);
      }
  }

  img {
    height: 100%;
    cursor: pointer;
  }
`;