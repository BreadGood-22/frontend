import styled from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  width: 100%;
  padding: 16px;
`;

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

export const GalleryItem = styled.li`
  max-height: 114px;
  min-height: 114px;
`;

export const Img = styled.img.attrs({
  alt: '게시글 이미지',
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border: 1px solid green; */
`;
