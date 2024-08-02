// SlideShowStyles.ts
import styled from 'styled-components';

export const SlideContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  img.next{
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 120px;
    opacity: 0.5;

    &:hover {
      opacity: 0.8;
    }
  }

  img.prev{
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 120px;
    opacity: 0.5;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Indicators = styled.div`
  margin-top: 10px;
`;

interface IndicatorProps {
  isActive: boolean;
}

export const Indicator = styled.span<IndicatorProps>`
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: ${(props) => (props.isActive ? 'black' : 'gray')};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;
