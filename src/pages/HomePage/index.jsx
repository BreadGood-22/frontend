import React, { useEffect, useState } from 'react';
import { PostList, NoFollowings, HeaderMain, OthersPostCommentModal } from '../../components';
import { axiosPrivate } from '../../api/apiController';
import { useIntersect } from '../../hooks/useIntersect';

export function HomePage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [postId, setPostId] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [page, setPage] = useState(0);

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
    try {
      setIsLoading(true);
      const {
        data: { posts },
      } = await axiosPrivate.get(`/post/feed/?limit=10&skip=${page * 10}`);

      setHasNextPage(posts.length === 10);
      setPage((prev) => prev + 1);
      setPosts((prev) => [...prev, ...posts]);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(true);
      console.error(e);
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeaderMain />
      {!posts.length ? (
        <NoFollowings />
      ) : (
        <PostList posts={posts} setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
      )}
      <div ref={ref}></div>
      {isLoading && <div>Loading...</div>}
      {isVisibleModal && <OthersPostCommentModal setIsVisibleModal={setIsVisibleModal} postId={postId} />}
    </>
  );
}
