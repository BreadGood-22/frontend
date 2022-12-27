import * as S from './style';
import { ProfileForm, ProfileSettingButton } from '../../components/profileSetting/ProfileForm';

export function ProfileSettingPage() {
  // 유효성 검사 최종 확인 state
  // 그렇다면 나중에 유저 정보는 어떻게 가지고 있을 것인가?

  return (
    <S.Container>
      <ProfileHeader />
      <ProfileForm />
      {/* <ProfileSettingButton /> */}
    </S.Container>
  );
}
export function ProfileHeader() {
  return (
    <S.Container>
      <S.H2>프로필 설정</S.H2>
      <S.Notice>나중에 언제든지 변경할 수 있습니다.</S.Notice>
    </S.Container>
  );
}
