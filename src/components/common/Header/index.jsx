import { Link } from 'react-router-dom';
import * as S from './style';
import { SmallButton } from '../Button/index';

export function HeaderBasic({ setIsVisibleModal }) {
  return (
    <S.HeaderContainer>
      <Link to={-1}>
        <S.PreviousIcon />
      </Link>
      <S.SettingIcon onClick={() => setIsVisibleModal(true)} />
    </S.HeaderContainer>
  );
}

export function HeaderSearch() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderInput />
    </S.HeaderContainer>
  );
}

export function HeaderMain() {
  return (
    <S.HeaderContainer>
      <S.HeaderMainText>빵굿빵굿 피드</S.HeaderMainText>
      <Link to='/search'>
        <S.SearchIcon />
      </Link>
    </S.HeaderContainer>
  );
}

export function HeaderChat({ setIsVisibleModal, children }) {
  return (
    <S.HeaderContainer>
      <Link to={-1}>
        <S.PreviousIcon />
      </Link>
      <S.HeaderChatText>{children}</S.HeaderChatText>
      <S.SettingIcon onClick={() => setIsVisibleModal(true)} />
    </S.HeaderContainer>
  );
}

export function HeaderUpload({ isDisabled, handlePostUpload, setIsVisibleAlert }) {
  return (
    <S.HeaderContainer>
      {isDisabled === false ? (
        <S.PreviousIcon onClick={() => setIsVisibleAlert(true)} />
      ) : (
        <Link to={-1}>
          <S.PreviousIcon />
        </Link>
      )}
      <SmallButton disabled={isDisabled} handlePostUpload={handlePostUpload}>
        업로드
      </SmallButton>
    </S.HeaderContainer>
  );
}

export function HeaderSave({ disabled, formId }) {
  return (
    <S.HeaderContainer>
      <Link to={-1}>
        <S.PreviousIcon />
      </Link>
      <SmallButton disabled={disabled} formId={formId}>
        저장
      </SmallButton>
    </S.HeaderContainer>
  );
}

export function HeaderFollowers() {
  return (
    <S.HeaderContainer>
      <Link to={-1}>
        <S.PreviousIcon />
      </Link>
      <S.HeaderFollowersText>Followers</S.HeaderFollowersText>
    </S.HeaderContainer>
  );
}

export function HeaderFollowings() {
  return (
    <S.HeaderContainer>
      <Link to={-1}>
        <S.PreviousIcon />
      </Link>
      <S.HeaderFollowersText>Followings</S.HeaderFollowersText>
    </S.HeaderContainer>
  );
}
