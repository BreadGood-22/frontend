import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../../api/apiController';
import { MyProductModal } from '../../../components';
import * as S from './style';

export function ProductsContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [product, setProduct] = useState({
    productId: '',
    link: '',
  });

  const { accountname } = useParams();

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const {
        data: { product },
      } = await axiosPrivate.get(`/product/${accountname}`);

      setProducts(product);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleClick = (productId, _accountname, link) => {
    const myAccountName = JSON.parse(localStorage.getItem('accountname'));

    if (myAccountName !== _accountname) {
      window.open(link);
      return;
    }

    setIsVisibleModal(true);
    setProduct((prev) => ({ ...prev, productId, link }));
  };

  useEffect(() => {
    getProducts();
  }, [accountname]);

  return (
    <>
      {products.length === 0 || (
        <S.Container>
          <S.Title>판매 중인 상품</S.Title>
          <S.ProductList>
            {products.map((item) => (
              <S.ProductItem key={item.id} onClick={() => handleClick(item.id, item.author.accountname, item.link)}>
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
      {isVisibleModal && (
        <MyProductModal setIsVisibleModal={setIsVisibleModal} getProducts={getProducts} product={product} />
      )}
    </>
  );
}
