import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

export function PostGallery({ posts }) {
  const galleryCont = useRef(null);

  const [bottom, setbottom] = useState(0);

  useEffect(() => {
    if (!galleryCont.current) return;
    setbottom(galleryCont.current.getBoundingClientRect().bottom);
  }, [posts]);

  return (
    <S.Container ref={galleryCont} bottom={bottom}>
      <S.GalleryList>
        {posts.map(
          (data) =>
            data.image && (
              <S.GalleryItem key={data.id}>
                <Link to={`/post/${data.id}`}>
                  <S.Img src={data.image} />
                </Link>
              </S.GalleryItem>
            ),
        )}
      </S.GalleryList>
    </S.Container>
  );
}
