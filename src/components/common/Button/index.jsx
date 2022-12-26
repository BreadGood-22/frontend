import * as S from './style';

export function MediumImgButton() {
  return (
    <>
      <S.MediumImgButton />
      <S.MediumImgButtonInput />
    </>
  );
}

export function SmallImgButton({ color }) {
  return (
    <>
      <S.SmallImgButtonLabel color={color} />
      <S.SmallImgButtonInput />
    </>
  );
}

// 버튼 텍스트: 로그인, 다음 2가지이므로 props.content로 받기
export function LargeButton({ disabled, handleClick, children }) {
  return (
    <S.LargeButton disabled={disabled} onClick={handleClick}>
      {children}
    </S.LargeButton>
  );
}

export function MediumButton({ isFollowed }) {
  return <S.MediumButton isFollowed={isFollowed}>{isFollowed ? '언팔로우' : '팔로우'}</S.MediumButton>;
}

// 버튼 텍스트: 저장, 업로드 2가지이므로 props.content로 받기
export function SmallButton({ disabled, children, handlePostUpload, formId }) {
  return (
    <S.SmallButton onClick={handlePostUpload} disabled={disabled} form={formId}>
      {children}
    </S.SmallButton>
  );
}

export function XSmallButton({ isFollowed, changeFollow }) {
  return (
    <S.XSmallButton onClick={changeFollow} isFollowed={isFollowed}>
      {isFollowed ? '취소' : '팔로우'}
    </S.XSmallButton>
  );
}
