import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { MediumButton } from '../../common/Button';
import { ReactComponent as ShareIcon } from '../../../assets/icons/icon-share.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-chat.svg';
import { axiosPrivate, BASE_URL } from '../../../api/apiController';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function UserInfoContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { accountname } = useParams();

  const localAccountName = JSON.parse(localStorage.getItem('accountname'));

  useEffect(() => {
    const getUserInfo = async () => {
      setIsLoading(true);
      try {
        const {
          data: { profile },
        } = await axiosPrivate.get(`/profile/${accountname}`);

        setUserInfo(profile);
      } catch (e) {
        console.log(e);
      }
    };

    getUserInfo();
  }, [accountname]);

  const { username, accountname: _accountname, intro, followerCount, followingCount, image, isfollow } = userInfo;

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (isfollow) {
        const {
          data: {
            profile: { isfollow, followerCount },
          },
        } = await axiosPrivate.delete(`/profile/${accountname}/unfollow`);

        setUserInfo((prev) => ({ ...prev, isfollow, followerCount }));
      } else {
        const {
          data: {
            profile: { isfollow, followerCount },
          },
        } = await axiosPrivate.post(`/profile/${accountname}/follow`);

        setUserInfo((prev) => ({ ...prev, isfollow, followerCount }));
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (image !== `${BASE_URL}/Ellipse.png`) profileImage = image;

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
          {/* path ???????????? */}
          <S.ProfileEditButton to='edit'>????????? ??????</S.ProfileEditButton>
          <S.RegisterButton to='/product'>?????? ??????</S.RegisterButton>
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
