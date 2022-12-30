import styled from 'styled-components';

export const PhotoUploadList = styled.ul`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
