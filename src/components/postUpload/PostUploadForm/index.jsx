import { useRef } from 'react';
import * as S from './style';
import { PhotoUploadList } from '../PhotoUploadList';
import { MediumImgButton } from '../../common/Button';

export function PostUploadForm() {
  const textRef = useRef(null);

  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  return (
    <S.Container>
      <h2 className='sr-only'>게시글 작성</h2>
      <S.ProfileImg />
      <S.PostWrite>
        <h3 className='sr-only'>게시글 작성 form</h3>
        <S.Form>
          <S.ContentInput onInput={handleResizeHeight} ref={textRef} />
          <S.ImgUploadButton>
            <h4 className='sr-only'>이미지 업로드 버튼</h4>
            <MediumImgButton />
          </S.ImgUploadButton>
        </S.Form>
        <PhotoUploadList />
      </S.PostWrite>
    </S.Container>
  );
}
