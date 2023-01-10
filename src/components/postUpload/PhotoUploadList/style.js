import styled from 'styled-components';

export const PhotoUploadList = styled.ul`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.lightGray};
    border: 3px solid ${({ theme }) => theme.palette.white};
    border-radius: 10px;
  }
`;
