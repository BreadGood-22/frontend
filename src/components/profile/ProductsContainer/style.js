import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 208px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.palette.white};
  margin-bottom: 6px;
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 16px;
`;

export const ProductList = styled.ul`
  display: flex;
  gap: 10px;
  overflow: auto hidden;
`;

export const ProductItem = styled.li`
  width: 140px;
  cursor: pointer;
`;

export const ProductImage = styled.img.attrs({
  alt: '',
})`
  width: inherit;
  height: 90px;
  object-fit: cover;
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};
  border-radius: 8px;
  margin-bottom: 6px;
`;

export const ProductName = styled.strong`
  display: inline-block;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.palette.brown};
`;
