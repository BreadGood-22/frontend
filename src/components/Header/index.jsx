import * as S from './style';
import { SmallButton } from '../index';

function HeaderBasic() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.SettingIcon />
    </S.HeaderContainer>
  );
}

function HeaderSearch() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderInput />
    </S.HeaderContainer>
  );
}

function HeaderMain() {
  return (
    <S.HeaderContainer>
      <S.HeaderMainText>빵굿빵굿 피드</S.HeaderMainText>
      <S.SearchIcon />
    </S.HeaderContainer>
  );
}

function HeaderChat() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderChatText></S.HeaderChatText>
      <S.SettingIcon />
    </S.HeaderContainer>
  );
}

function HeaderUpload() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <SmallButton content='업로드' isActive={false} />
    </S.HeaderContainer>
  );
}

function HeaderSave() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <SmallButton content='저장' isActive={true} />
    </S.HeaderContainer>
  );
}

function HeaderFollowers() {
  return (
    <S.HeaderContainer>
      <S.PreviousIcon />
      <S.HeaderFollowersText>Followers</S.HeaderFollowersText>
    </S.HeaderContainer>
  );
}

export { HeaderBasic, HeaderSearch, HeaderMain, HeaderChat, HeaderUpload, HeaderSave, HeaderFollowers };
