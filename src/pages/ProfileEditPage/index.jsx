import { useState } from 'react';
import { ProfileForm, HeaderSave } from '../../components';

export function ProfileEditPage() {
  const [isValid, setIsValid] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(true);

  return (
    <section>
      <h2 className='sr-only'>프로필 수정</h2>
      <HeaderSave disabled={!isValid} formId='profile-form' />
      <ProfileForm setIsValid={setIsValid} isProfileEdit={isProfileEdit} />
    </section>
  );
}
