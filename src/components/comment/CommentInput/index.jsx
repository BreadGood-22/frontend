import React, { useState, useEffect } from 'react';
import * as S from './style';
import { axiosPrivate } from '../../../api/apiController';
import { renderProfile } from '../../../utils/renderProfile';
import { getUserInfo } from '../../../api';

export function CommentInput({ getComments, post, setPost, postId, setComments, setHasNextPage, page }) {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState('');
  const [input, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const profileImage = renderProfile(profile);

  const getProfile = async () => {
    setIsLoading(true);

    const { image } = await getUserInfo(accountname);

    setProfile(image);
    setIsLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleUpload = async () => {
    setIsLoading(true);

    try {
      await axiosPrivate.post(`/post/${postId}/comments`, {
        comment: {
          content: input,
        },
      });

      setInput('');
      setPost((prev) => ({ ...prev, commentCount: post.commentCount + 1 }));
      setComments([]);
      setHasNextPage(false);
      page.current = 0;
      getComments();
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (input) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [input]);

  return (
    <S.Container>
      <S.ProfileImage src={profileImage} />
      <S.Input value={input} onChange={(e) => setInput(e.target.value)} />
      <S.Button disabled={isDisabled} onClick={handleUpload}>
        게시
      </S.Button>
    </S.Container>
  );
}
