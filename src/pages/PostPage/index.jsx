import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../api/apiController';
import { HeaderBasic, HeaderBasicModal, PostContainer, CommentList, CommentInput } from '../../components';

export function PostPage() {
  const container = useRef(null);

  const { postId: id } = useParams();

  const [postId, setPostId] = useState(id);
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [height, setHeight] = useState(0);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const getComments = async () => {
    const {
      data: { comments },
    } = await axiosPrivate.get(`/post/${id}/comments`);

    setComments(comments);
  };

  const getUserPost = async () => {
    const {
      data: { post },
    } = await axiosPrivate.get(`/post/${postId}`);

    setPost(post);
  };

  useEffect(() => {
    getUserPost();
    getComments();
  }, []);

  useEffect(() => {
    if (!container.current) return;
    setHeight(container.current.clientHeight);
  }, [comments]);

  return (
    <>
      <section ref={container}>
        <h2 className='sr-only'>게시글 페이지</h2>
        <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
        <PostContainer postId={postId} setPostId={setPostId} post={post} getUserPost={getUserPost} />
        <CommentList
          height={height}
          postId={postId}
          getComments={getComments}
          comments={comments}
          post={post}
          setPost={setPost}
        />
      </section>
      <CommentInput getComments={getComments} post={post} setPost={setPost} postId={postId} />
      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
