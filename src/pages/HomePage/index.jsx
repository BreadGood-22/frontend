import React, { useEffect, useState, useRef } from 'react';
import { PostList, NoFollowings, HeaderMain, OthersPostCommentModal } from '../../components';
import { axiosPrivate } from '../../api/apiController';
import { useIntersect } from '../../hooks/useIntersect';

export function HomePage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [postId, setPostId] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const page = useRef(0);

  const [posts, setPosts] = useState([]);

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading) {
      getFollowingPosts();
    }
  });

  useEffect(() => {
    getFollowingPosts();
  }, []);

  const getFollowingPosts = async () => {
    setIsLoading(true);
    try {
      const {
        data: { posts },
      } = await axiosPrivate.get(`/post/feed/?limit=10&skip=${page.current * 10}`);

      setHasNextPage(posts.length === 10);
      page.current += 1;
      setPosts((prev) => [...prev, ...posts]);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

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
      {isLoading && <div>Loading...</div>}
      {isVisibleModal && <OthersPostCommentModal setIsVisibleModal={setIsVisibleModal} postId={postId} />}
    </section>
  );
}
