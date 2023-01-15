import React, { useEffect, useState, useRef } from 'react';
import { PostList, NoFollowings, HeaderMain, OthersPostCommentModal } from '../../components';
import { getHomeFeeds } from '../../api';
import useIntersect from '../../hooks/useIntersect';

export function HomePage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [postId, setPostId] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const page = useRef(0);

  const [posts, setPosts] = useState([]);

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading) {
      getFollowingPosts();
    }
  });

  useEffect(() => {
    if (!hasNextPage) return;
    getFollowingPosts();
  }, []);

  const getFollowingPosts = async () => {
    setIsLoading(true);
    const posts = await getHomeFeeds(page.current);

    setHasNextPage(posts.length === 10);
    page.current += 1;
    setPosts((prev) => [...prev, ...posts]);
    setIsLoading(false);
  };

  if (isLoading) return <div>로딩중...</div>;

  return (
    <section>
      <h2 className='sr-only'>빵굿빵굿 피드</h2>
      <HeaderMain />
      {!posts.length ? (
        <NoFollowings />
      ) : (
        <PostList posts={posts} setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
      )}
      <div ref={ref}></div>
      {isVisibleModal && <OthersPostCommentModal setIsVisibleModal={setIsVisibleModal} postId={postId} />}
    </section>
  );
}
