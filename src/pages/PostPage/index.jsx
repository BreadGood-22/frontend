import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getPost, getAllComment } from '../../api';
import { HeaderBasic, HeaderBasicModal, PostContainer, CommentList, CommentInput } from '../../components';
import useIntersect from '../../hooks/useIntersect';

export function PostPage() {
  const { postId: id } = useParams();

  const [postId, setPostId] = useState(id);
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const page = useRef(0);

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading) {
      getComments();
    }
  });

  const getComments = async () => {
    setIsLoading(true);
    const comments = await getAllComment(id, page.current);

    setComments((prev) => [...prev, ...comments]);
    setHasNextPage(comments.length === 10);
    page.current += 1;
    setIsLoading(false);
  };

  const getUserPost = async () => {
    setIsLoading(true);
    const post = await getPost(postId);

    setPost(post);
    setIsLoading(false);
  };

  useEffect(() => {
    setComments([]);
    setHasNextPage(false);
    page.current = 0;
    getUserPost();
    getComments();
  }, []);

  return (
    <>
      <section>
        <h2 className='sr-only'>게시글 페이지</h2>
        <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
        <PostContainer postId={postId} setPostId={setPostId} post={post} getUserPost={getUserPost} />
        <CommentList
          postId={postId}
          getComments={getComments}
          comments={comments}
          post={post}
          setPost={setPost}
          setComments={setComments}
          setHasNextPage={setHasNextPage}
          page={page}
        />
        <div ref={ref}></div>
      </section>
      <CommentInput
        getComments={getComments}
        post={post}
        setPost={setPost}
        postId={postId}
        setComments={setComments}
        setHasNextPage={setHasNextPage}
        page={page}
      />
      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
