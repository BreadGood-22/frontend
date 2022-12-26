import React, { useState } from 'react';
import { axiosPrivate } from '../../../api/apiController';
import { XSmallButton } from '../../common/Button';
import * as S from './style';

export function Follow({ accountname, username, intro, image, isfollow }) {
  const [isFollowed, setIsFollowed] = useState(isfollow);
  const myAccountName = JSON.parse(localStorage.getItem('accountname'));
  const url = `/profile/${accountname}`;

  const changeFollow = async () => {
    if (isFollowed) {
      await axiosPrivate.delete(`/profile/${accountname}/unfollow`);

      setIsFollowed(false);
    } else {
      await axiosPrivate.post(`/profile/${accountname}/follow`);

      setIsFollowed(true);
    }
  };

  return (
    <S.Container>
      <S.ProfileLink to={url}>
        <S.ProfileImg src={image} />
        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{intro}</S.UserIntro>
        </S.UserInfo>
      </S.ProfileLink>
      {myAccountName === accountname ? null : <XSmallButton changeFollow={changeFollow} isFollowed={isFollowed} />}
    </S.Container>
  );
}
