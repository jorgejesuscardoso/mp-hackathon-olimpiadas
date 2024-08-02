import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
  height: 25vh;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: var(--font-size-smallest);
  font-style: italic;
  text-align: center;
  padding: 0.5rem;

  p.copy {
    position: absolute;
    bottom: 5%;
    z-index: 1999;
  }

  img {
    width: 150px;
  }
`;