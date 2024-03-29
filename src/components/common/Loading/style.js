import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const Image = styled.img`
  width: 165px;
`;

export const Text = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;
