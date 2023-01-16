import { Link } from 'react-router-dom';
import useHeight from '../../../hooks/useHeight';
import * as S from './style';

export function PostGallery({ posts }) {
  const isImage = posts.filter((post) => post.image);
  const [container, height] = useHeight(posts);

  if (!isImage.length) return;

  return (
    <S.Container ref={container} bottom={height}>
      <S.GalleryList>
        {posts.map(
          (data) =>
            data.image && (
              <S.GalleryItem key={data.id}>
                <Link to={`/post/${data.id}`}>
                  <S.Img src={data.image.split(',')[0]} />
                </Link>
              </S.GalleryItem>
            ),
        )}
      </S.GalleryList>
    </S.Container>
  );
}
