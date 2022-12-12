import * as S from './style';

function MediumImgButton({ size }) {
  return (
    <S.MediumImgButton>
      <S.ImageIcon size={size} />
    </S.MediumImgButton>
  );
}

function SmallImgButton({ color, size }) {
  return (
    <S.SmallImgButton color={color}>
      <S.ImageIcon size={size} />
    </S.SmallImgButton>
  );
}

// 버튼 텍스트: 로그인, 다음 2가지이므로 props.content로 받기
function LargeButton({ content, isActive }) {
  return <S.LargeButton isActive={isActive}>{content}</S.LargeButton>;
}

function MediumButton({ isFollowed }) {
  return <S.MediumButton isFollowed={isFollowed}>{isFollowed ? '언팔로우' : '팔로우'}</S.MediumButton>;
}

// 버튼 텍스트: 저장, 업로드 2가지이므로 props.content로 받기
function SmallButton({ content, isActive }) {
  return <S.SmallButton isActive={isActive}>{content}</S.SmallButton>;
}

function XSmallButton({ isFollowed }) {
  return <S.XSmallButton isFollowed={isFollowed}>{isFollowed ? '취소' : '팔로우'}</S.XSmallButton>;
}

export { MediumImgButton, SmallImgButton, LargeButton, MediumButton, SmallButton, XSmallButton };
