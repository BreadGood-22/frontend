import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { MediumButton } from '../../common/Button';
import { ReactComponent as ShareIcon } from '../../../assets/icons/icon-share.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-chat.svg';
import { axiosPrivate } from '../../../api/apiController';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function UserInfoContainer() {
  const [userInfo, setUserInfo] = useState({});
  const { accountname } = useParams();

  const localAccountName = JSON.parse(localStorage.getItem('accountname'));
  const BASIC_PROFILE_URL = `${process.env.REACT_APP_SERVER_URL}/Ellipse.png`;

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${accountname}`);

      setUserInfo(profile);
    };

    getUserInfo();
  }, []);

  const { username, accountname: _accountname, intro, followerCount, followingCount, image } = userInfo;

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (image !== BASIC_PROFILE_URL) profileImage = image;

    return <S.ProfileImage src={profileImage} />;
  };

  return (
    <S.Container>
      {renderProfileImage()}
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
          {/* path 수정하기 */}
          <S.ProfileEditButton to='edit'>프로필 수정</S.ProfileEditButton>
          <S.RegisterButton to='/product'>상품 등록</S.RegisterButton>
        </div>
      ) : (
        <div>
          <S.IconButton>
            <ChatIcon />
          </S.IconButton>
          <MediumButton isFollowed={true} />
          <S.IconButton>
            <ShareIcon />
          </S.IconButton>
        </div>
      )}
    </S.Container>
  );
}
