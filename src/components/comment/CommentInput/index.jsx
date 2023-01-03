import React, { useState, useEffect } from 'react';
import * as S from './style';
import { axiosPrivate, BASE_URL } from '../../../api/apiController';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function CommentInput({ getComments, post, setPost, postId, setComments, setHasNextPage, page }) {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState('');
  const [input, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  const getProfile = async () => {
    setIsLoading(true);
    try {
      const {
        data: {
          profile: { image },
        },
      } = await axiosPrivate.get(`/profile/${accountname}`);

      setProfile(image);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (profile !== `${BASE_URL}/Ellipse.png`) profileImage = profile;

    return <S.ProfileImage src={profileImage} />;
  };

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
      {renderProfileImage()}
      <S.Input value={input} onChange={(e) => setInput(e.target.value)} />
      <S.Button disabled={isDisabled} onClick={handleUpload}>
        게시
      </S.Button>
    </S.Container>
  );
}
