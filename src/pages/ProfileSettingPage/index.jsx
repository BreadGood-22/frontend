import { useState } from 'react';
import * as S from './style';
import { Loading, ProfileForm } from '../../components';

export function ProfileSettingPage() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <S.Container>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <S.H2>프로필 설정</S.H2>
          <S.Notice>나중에 언제든지 변경할 수 있습니다.</S.Notice>
          <ProfileForm setIsValid={setIsValid} setIsLoading={setIsLoading} />
          <S.Button disabled={!isValid} form='profile-form'>
            빵굿빵굿 시작하기
          </S.Button>
        </>
      )}
    </S.Container>
  );
}
