import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from '../../api/apiController';
import { HeaderBasic, HeaderBasicModal, MyPostModal, Post, Comment, CommentInput } from '../../components';
import * as S from './style';

export function PostPage() {
  const commentCont = useRef(null);

  const { postId: id } = useParams();

  const [postId, setPostId] = useState(id);
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [height, setHeight] = useState(0);
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

  useEffect(() => {
    if (!commentCont.current) return;
    setHeight(commentCont.current.clientHeight);
  }, [comments]);

  return (
    <>
      {post && (
        <section ref={commentCont}>
          <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
          <S.Container>
            <Post setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} data={post} />
          </S.Container>
          {comments.length && (
            <S.CommentList height={height}>
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </S.CommentList>
          )}
        </section>
      )}
      <CommentInput getComments={getComments} post={post} setPost={setPost} postId={postId} />
      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
      {isVisibleModal && <MyPostModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
