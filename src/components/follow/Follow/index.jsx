import React, { useState } from 'react';
import { XSmallButton } from '../../common/Button';
import * as S from './style';
import { renderProfile } from '../../../utils/renderProfile';
import { addFollow, deleteFollow } from '../../../api';

export function Follow({ accountname, username, intro, image, isfollow }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowed, setIsFollowed] = useState(isfollow);
  const myAccountName = JSON.parse(localStorage.getItem('accountname'));
  const url = `/profile/${accountname}`;
  const profileImage = renderProfile(image);

  const changeFollow = async () => {
    setIsLoading(true);

    if (isFollowed) {
      await deleteFollow(accountname);
      setIsFollowed(false);
    } else {
      await addFollow(accountname);
      setIsFollowed(true);
    }

    setIsLoading(false);
  };

  return (
    <S.Container>
      <S.ProfileLink to={url}>
        <S.ProfileImg src={profileImage} />
        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{intro}</S.UserIntro>
        </S.UserInfo>
      </S.ProfileLink>
      {!(myAccountName === accountname) && <XSmallButton changeFollow={changeFollow} isFollowed={isFollowed} />}
    </S.Container>
  );
}
