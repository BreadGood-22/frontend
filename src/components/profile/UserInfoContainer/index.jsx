import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './style';
import { MediumButton } from '../../common/Button';
import { ReactComponent as ShareIcon } from '../../../assets/icons/icon-share.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-chat.svg';

export function UserInfoContainer() {
  const accountName = 'breadgood';
  const accountID = 'breadgood';
  const intro = 'breadgood';
  const isMyProfile = true;
  // context로 accountname 전역 관리 설정
  // context로 accountname 가져와 /profile/:accountname 보내기

  return (
    <S.Container>
      <S.ProfileImage />
      <S.AccountName>{accountName}</S.AccountName>
      <S.AccountId>@{accountID}</S.AccountId>
      <S.Intro>{intro}</S.Intro>
      <S.StyledLink to='breadgood/follower'>
        <S.Count>0</S.Count>
        <S.FollowType>followers</S.FollowType>
      </S.StyledLink>
      <S.StyledLink to='breadgood/following'>
        <S.Count>128</S.Count>
        <S.FollowType>followings</S.FollowType>
      </S.StyledLink>
      {isMyProfile ? (
        <div>
          {/* path 수정하기 */}
          <S.ProfileEditButton to='breadgood/edit'>프로필 수정</S.ProfileEditButton>
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
