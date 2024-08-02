import { useState, useEffect } from 'react';
import { ImageContainer, Indicator, Indicators, SlideContainer, SlideImage } from './styled';

// Lista de URLs das imagens
const slides = [
  'https://i.ytimg.com/vi/HKL2gCTVcp4/maxresdefault.jpg',
  'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/08/02133910/bia-souza-ouro-olimpico.jpg',
  'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/brasil-ginastica-equipes-bronze-paris-2024-e1722365818956.jpg',
  'https://m.ahstatic.com/is/image/accorhotels/conheca-as-46-modalidades-das-olimpiadas-de-toquio-2021-2024-2:3by2?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1&wid=335&hei=223&qlt=80',
  'https://static.significados.com.br/foto/mascotes-das-olimpiadas-de-paris-2024.jpg',
];

const SlideShow = ({ interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    return () => clearInterval(slideTimer);
  }, [interval]);

  return (
    <SlideContainer>
      <ImageContainer>
        <SlideImage src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </ImageContainer>
        <img
          src="next_black.png"
          alt=""
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            )
          }
          className='next'
        />
        <img 
          src="prev_black.png"
          alt=""
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
          className='prev'
        />
      <Indicators>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            className={currentSlide === index ? 'activeSlide' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Indicators>
    </SlideContainer>
  );
};

export default SlideShow;
