import styled from 'styled-components';
import PostListIconOn from '../../../assets/icons/icon-post-list-on.svg';
import PostListIconOff from '../../../assets/icons/icon-post-list-off.svg';
import PostGalleryIconOn from '../../../assets/icons/icon-post-gallery-on.svg';
import PostGalleryIconOff from '../../../assets/icons/icon-post-gallery-off.svg';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
  padding-bottom: 60px;
`;

export const TabContainer = styled.div`
  padding: 9px 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
  background-color: ${({ theme }) => theme.palette.white};
  overflow: hidden;
`;

export const TabList = styled.ul`
  float: right;
  display: flex;
`;

export const TabItem = styled.li`
  width: 26px;
  height: 26px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
`;

export const ListButton = styled(Button)`
  background: ${({ activeIndex }) => (activeIndex === 0 ? `url(${PostListIconOn})` : `url(${PostListIconOff})`)};
`;

export const GalleryButton = styled(Button)`
  background: ${({ activeIndex }) => (activeIndex === 1 ? `url(${PostGalleryIconOn})` : `url(${PostGalleryIconOff})`)};
`;
