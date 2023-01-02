import * as S from './style';
import { Post } from '../Post';
import useHeight from '../../../hooks/useHeight';

export function PostList({ posts, setIsVisibleModal, setPostId }) {
  const [container, height] = useHeight(posts);

  return (
    <S.Container ref={container} height={height}>
      {posts.map((data) => (
        <Post key={data.id} data={data} setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
      ))}
    </S.Container>
  );
}
