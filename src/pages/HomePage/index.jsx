import React, { useState } from 'react';
import { PostList, NoFollowings, HeaderMain, OthersPostCommentModal } from '../../components';

export function HomePage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [postId, setPostId] = useState('');

  const [posts, setPosts] = useState([
    {
      id: '63a71f1223b7e292a597d8ff',
      content: 'ss',
      image: 'http://146.56.183.55:5050/1671896850472.png',
      createdAt: '2022-12-24T15:47:30.743Z',
      updatedAt: '2022-12-24T15:47:30.743Z',
      hearted: false,
      heartCount: 0,
      comments: [],
      commentCount: 0,
      author: {
        _id: '63a71e8423b7e292a597d736',
        username: 'breadgod',
        accountname: 'breadgodid',
        intro: 'breadgod',
        image: 'http://146.56.183.55:5050/Ellipse.png',
        isfollow: false,
        following: ['639eaaaf23b7e292a596b91d'],
        follower: ['639eaaaf23b7e292a596b91d'],
        followerCount: 1,
        followingCount: 1,
      },
    },
  ]);

  return (
    <>
      <HeaderMain />
      {!posts.length ? (
        <NoFollowings />
      ) : (
        <PostList posts={posts} setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
      )}
      {isVisibleModal && <OthersPostCommentModal setIsVisibleModal={setIsVisibleModal} postId={postId} />}
    </>
  );
}
