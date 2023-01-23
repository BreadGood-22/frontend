import { useState, useRef } from 'react';
import * as S from './style';

export function ImageSlider({ image }) {
  const imageList = image.split(',');

  const ref = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    ref.current.style.transform = `translateX(${-1 * ((100 / imageList.length) * index)}%)`;
    setActiveIndex(index);
  };

  return (
    <S.Container>
      <S.ImageSlides length={imageList.length} ref={ref}>
        {imageList.map((image, i) => (
          <S.ImageSlide key={i}>
            <S.Image src={image} />
          </S.ImageSlide>
        ))}
      </S.ImageSlides>

      {imageList.length > 1 && (
        <S.ButtonContainer>
          {imageList.map((_, i) => (
            <S.SlideButton key={i} onClick={() => handleClick(i)} isShown={activeIndex === i} />
          ))}
        </S.ButtonContainer>
      )}
    </S.Container>
  );
}
