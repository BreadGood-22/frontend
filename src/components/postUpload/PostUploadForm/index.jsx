import React, { useRef, useState } from 'react';
import * as S from './style';
import { PhotoUploadList } from '../PhotoUploadList';
import { MediumImgButton } from '../../common/Button';

export function PostUploadForm() {
  const [imgFile, setImgFile] = useState('');
  const textRef = useRef();

  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  const handleFileUpload = (e) => {
    setImgFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <S.Container>
      <h2 className='sr-only'>게시글 작성</h2>
      <S.ProfileImg />
      <S.PostWrite>
        <h3 className='sr-only'>게시글 작성 form</h3>
        <S.Form>
          <S.ContentInput onInput={handleResizeHeight} ref={textRef} />
          <S.ImgUploadButton onChange={handleFileUpload}>
            <h4 className='sr-only'>이미지 업로드 버튼</h4>
            <MediumImgButton />
          </S.ImgUploadButton>
          {imgFile && <PhotoUploadList imgFile={imgFile} setImgFile={setImgFile} />}
        </S.Form>
      </S.PostWrite>
    </S.Container>
  );
}
