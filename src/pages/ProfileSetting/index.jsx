import * as S from '../ProfileSetting/style';
import { NameInput, IDInput, IntroduceInput, Label } from '../../components/ActiveInputs/style';
import { LargeButton } from '../../components/index';

export function ProfileSetting() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.H2>프로필 설정</S.H2>
        <S.Notice>나중에 언제든지 변경할 수 있습니다.</S.Notice>
        <S.ImgWrapper>
          <S.Img />
          <S.UploadImg />
        </S.ImgWrapper>
        <S.Form>
          <Label>사용자 이름</Label>
          <NameInput />
          <Label>계정 ID</Label>
          <IDInput />
          <S.WarningText isVisible={true}>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</S.WarningText>
          <S.WarningText isVisible={true}>*이미 사용중인 ID입니다.</S.WarningText>
          <Label>소개</Label>
          <IntroduceInput />
          <LargeButton content='감귤마켓 시작하기' disabled={false}></LargeButton>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}
