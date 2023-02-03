import { useState } from 'react';
import { ProfileForm, HeaderSave, Loading } from '../../components';

export function ProfileEditPage() {
  const [isValid, setIsValid] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section>
      <h2 className='sr-only'>프로필 수정</h2>
      <HeaderSave disabled={isLoading || !isValid} formId='profile-form' />
      {isLoading && <Loading />}
      {!isLoading && <ProfileForm setIsValid={setIsValid} isProfileEdit={isProfileEdit} setIsLoading={setIsLoading} />}
    </section>
  );
}
