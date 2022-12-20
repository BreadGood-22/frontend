import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

export function PostGallery({ posts }) {
  return (
    <S.Container>
      <S.GalleryList>
        {posts.map(
          (data) =>
            data.image && (
              <S.GalleryItem key={data.id}>
                <Link to=''>
                  <S.Img src={data.image} />
                </Link>
              </S.GalleryItem>
            ),
        )}
      </S.GalleryList>
    </S.Container>
  );
}
