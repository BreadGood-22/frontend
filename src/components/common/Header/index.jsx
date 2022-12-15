import * as S from './style';
import { SmallButton } from '../Button/index';

export function HeaderBasic() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.SettingIcon />
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
      <S.SearchIcon />
    </S.HeaderContainer>
  );
}

export function HeaderChat() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderChatText></S.HeaderChatText>
      <S.SettingIcon />
    </S.HeaderContainer>
  );
}

export function HeaderUpload() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <SmallButton content='업로드' disabled={false} />
    </S.HeaderContainer>
  );
}

export function HeaderSave() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <SmallButton content='저장' disabled={false} />
    </S.HeaderContainer>
  );
}

export function HeaderFollowers() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderFollowersText>Followers</S.HeaderFollowersText>
    </S.HeaderContainer>
  );
}
