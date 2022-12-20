import React from 'react';
import * as S from './style';

export function ProductsContainer() {
  const product = [
    {
      id: '1234',
      itemName: '빵굿빵굿',
      price: 12000,
      link: 'https://naver.com',
      itemImage: 'https://i.postimg.cc/Kv4vV8JL/basic-profile-img.png',
      author: {
        _id: 'dkdk',
        username: '2',
        accountname: '2',
        intro: '2',
        image: '2',
        following: [],
        follower: ['dd', 'ss'],
        followerCount: 1,
        followingCount: 0,
      },
    },
    {
      id: '12345',
      itemName: '빵굿빵굿',
      price: 12000,
      link: 'https://naver.com',
      itemImage: 'https://i.postimg.cc/Kv4vV8JL/basic-profile-img.png',
      author: {
        _id: 'dkdk',
        username: '2',
        accountname: '2',
        intro: '2',
        image: '2',
        following: [],
        follower: ['dd', 'ss'],
        followerCount: 1,
        followingCount: 0,
      },
    },
    {
      id: '123456',
      itemName: '빵굿빵굿',
      price: 12000,
      link: 'https://naver.com',
      itemImage: 'https://i.postimg.cc/xdVmnz4B/symbol-logo.png',
      author: {
        _id: 'dkdk',
        username: '2',
        accountname: '2',
        intro: '2',
        image: '2',
        following: [],
        follower: ['dd', 'ss'],
        followerCount: 1,
        followingCount: 0,
      },
    },
    {
      id: '1234567',
      itemName: '빵굿빵굿',
      price: 12000,
      link: 'https://naver.com',
      itemImage: 'https://i.postimg.cc/xdVmnz4B/symbol-logo.png',
      author: {
        _id: 'dkdk',
        username: '2',
        accountname: '2',
        intro: '2',
        image: '2',
        following: [],
        follower: ['dd', 'ss'],
        followerCount: 1,
        followingCount: 0,
      },
    },
    {
      id: '12345678',
      itemName: '빵굿빵굿',
      price: 12000,
      link: 'https://naver.com',
      itemImage: 'https://i.postimg.cc/xdVmnz4B/symbol-logo.png',
      author: {
        _id: 'dkdk',
        username: '2',
        accountname: '2',
        intro: '2',
        image: '2',
        following: [],
        follower: ['dd', 'ss'],
        followerCount: 1,
        followingCount: 0,
      },
    },
  ];
  // const product = [];

  return (
    <>
      {product.length === 0 || (
        <S.Container>
          <S.Title>판매 중인 상품</S.Title>
          <S.ProductList>
            {product.map((item) => (
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
