import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;

export const ImageSlides = styled.ul`
  display: flex;
  width: ${({ length }) => 100 * length}%;
  height: 228px;
  transition: all 400ms ease-in-out;
`;

export const ImageSlide = styled.li`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

export const SlideButton = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 0.8px solid ${({ theme }) => theme.palette.brown};
  background-color: ${({ isShown, theme }) => (isShown ? theme.palette.brown : theme.palette.white)};
`;
