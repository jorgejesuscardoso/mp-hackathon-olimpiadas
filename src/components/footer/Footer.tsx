import { FooterContainer } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <img src='logo_color.svg' alt='logo' />
      </div>
      <p className='copy'>
      Made by Jorge de Jesus Cardoso. Hackathon Condante - Paris Olympic Games - 2024.
      </p>
    </FooterContainer>
  );
}

export default Footer;