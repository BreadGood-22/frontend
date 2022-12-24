import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../api/apiController';
import { HeaderBasic, HeaderBasicModal, MyPostModal, Post, Comment, CommentInput } from '../../components';
import * as S from './style';

export function PostPage() {
  const { postId: id } = useParams();

  const [postId, setPostId] = useState(id);
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const getPost = async () => {
    const {
      data: { post },
    } = await axiosPrivate.get(`/post/${postId}`);

    setPost(post);
  };

  const getComments = async () => {
    const {
      data: { comments },
    } = await axiosPrivate.get(`/post/${id}/comments`);

    setComments(comments);
  };

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <>
      {post && (
        <>
          <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
          <S.Container>
            <Post setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} data={post} />
          </S.Container>
          <S.CommentList>
            {comments.length && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
          </S.CommentList>
        </>
      )}
      <CommentInput />
      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
      {isVisibleModal && <MyPostModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
