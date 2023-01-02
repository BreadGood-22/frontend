import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../api/apiController';
import { HeaderBasic, HeaderBasicModal, PostContainer, CommentList, CommentInput } from '../../components';

export function PostPage() {
  const { postId: id } = useParams();

  const [postId, setPostId] = useState(id);
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getComments = async () => {
    setIsLoading(true);
    try {
      const {
        data: { comments },
      } = await axiosPrivate.get(`/post/${id}/comments`);

      setComments(comments);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const getUserPost = async () => {
    setIsLoading(true);
    try {
      const {
        data: { post },
      } = await axiosPrivate.get(`/post/${postId}`);

      setPost(post);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserPost();
    getComments();
  }, []);

  return (
    <>
      <section>
        <h2 className='sr-only'>게시글 페이지</h2>
        <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
        <PostContainer postId={postId} setPostId={setPostId} post={post} getUserPost={getUserPost} />
        <CommentList postId={postId} getComments={getComments} comments={comments} post={post} setPost={setPost} />
      </section>
      <CommentInput getComments={getComments} post={post} setPost={setPost} postId={postId} />
      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
