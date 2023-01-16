import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { MediumButton } from '../../common/Button';
import { ReactComponent as ShareIcon } from '../../../assets/icons/icon-share.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-chat.svg';
import { getUserInfo, deleteFollow, addFollow } from '../../../api';

export function UserInfoContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { accountname } = useParams();

  const localAccountName = JSON.parse(localStorage.getItem('accountname'));

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const profile = await getUserInfo(accountname);

      setUserInfo(profile);
      setIsLoading(false);
    })();
  }, [accountname]);

  const { username, accountname: _accountname, intro, followerCount, followingCount, image, isfollow } = userInfo;

  const handleClick = async () => {
    if (isfollow) {
      const { isfollow, followerCount } = await deleteFollow(accountname);

      setUserInfo((prev) => ({ ...prev, isfollow, followerCount }));
    } else {
      const { isfollow, followerCount } = await addFollow(accountname);

      setUserInfo((prev) => ({ ...prev, isfollow, followerCount }));
    }
  };

  return (
    <S.Container>
      <S.ProfileImage src={image} />
      <S.AccountName>{username}</S.AccountName>
      <S.AccountId>@{_accountname}</S.AccountId>
      <S.Intro>{intro}</S.Intro>
      <S.StyledLink to='follower'>
        <S.Count>{followerCount}</S.Count>
        <S.FollowType>followers</S.FollowType>
      </S.StyledLink>
      <S.StyledLink to='following'>
        <S.Count>{followingCount}</S.Count>
        <S.FollowType>followings</S.FollowType>
      </S.StyledLink>
      {localAccountName === _accountname ? (
        <div>
          <S.ProfileEditButton to='edit'>프로필 수정</S.ProfileEditButton>
          <S.RegisterButton to='/product'>상품 등록</S.RegisterButton>
        </div>
      ) : (
        <div>
          <S.IconButton>
            <ChatIcon />
          </S.IconButton>
          <MediumButton isFollowed={isfollow} handleClick={handleClick} />
          <S.IconButton>
            <ShareIcon />
          </S.IconButton>
        </div>
      )}
    </S.Container>
  );
}
