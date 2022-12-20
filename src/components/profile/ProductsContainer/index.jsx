import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../api/apiController';
import * as S from './style';

export function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const { accountname } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const {
        data: { data: count, product },
      } = await axiosPrivate.get(`/product/${accountname}`);

      setProducts(product);
    };

    getProducts();
  }, []);

  return (
    <>
      {products.length === 0 || (
        <S.Container>
          <S.Title>판매 중인 상품</S.Title>
          <S.ProductList>
            {products.map((item) => (
              <S.ProductItem key={item.id}>
                <S.ProductImage src={item.itemImage} />
                <S.ProductName>{item.itemName}</S.ProductName>
                <S.ProductPrice>
                  {new Intl.NumberFormat().format(String(item.price).replace(/\D/g, ''))}원
                </S.ProductPrice>
              </S.ProductItem>
            ))}
          </S.ProductList>
        </S.Container>
      )}
    </>
  );
}
