import * as S from './style';
import { ProfileForm } from '../../components';

export function ProfileSettingPage() {
  return (
    <S.Container>
      <S.H2>프로필 설정</S.H2>
      <S.Notice>나중에 언제든지 변경할 수 있습니다.</S.Notice>
      <ProfileForm />
    </S.Container>
  );
}
