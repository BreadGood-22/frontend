import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

export function PostGallery({ post }) {
  return (
    <S.Container>
      <S.GalleryList>
        {post.map((data) => (
          <S.GalleryItem key={data.id}>
            <Link to=''>
              <S.Img src={data.image} />
            </Link>
          </S.GalleryItem>
        ))}
      </S.GalleryList>
    </S.Container>
  );
}
