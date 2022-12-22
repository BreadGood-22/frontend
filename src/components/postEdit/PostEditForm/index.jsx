import { useState } from 'react';
import * as S from './style';
import { MediumImgButton } from '../../common/Button';
import { HeaderUpload } from '../../common/Header';
import { PhotoUploadList } from '../../postUpload/PhotoUploadList';

export function PostEditForm() {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <HeaderUpload isDisabled={isDisabled} />
      <S.Container>
        <h2 className='sr-only'>게시글 작성</h2>
        <S.ProfileImg />
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput />
            <S.ImgUploadButton>
              <h4 className='sr-only'>이미지 업로드 버튼</h4>
              <MediumImgButton />
            </S.ImgUploadButton>
            <PhotoUploadList />
          </S.Form>
        </S.PostWrite>
      </S.Container>
    </>
  );
}
