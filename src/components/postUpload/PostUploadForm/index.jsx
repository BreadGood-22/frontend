import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { PhotoUploadList } from '../PhotoUploadList';
import { MediumImgButton } from '../../common/Button';
import { HeaderUpload } from '../../common/Header';

export function PostUploadForm() {
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const textRef = useRef();

  const handleTextArea = (e) => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    setText(e.target.value);
  };

  const handleFileUpload = (e) => {
    setImgFile(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    if (text || imgFile) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [text, imgFile]);

  return (
    <>
      <HeaderUpload isDisabled={isDisabled} />
      <S.Container>
        <h2 className='sr-only'>게시글 작성</h2>
        <S.ProfileImg />
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput onInput={handleTextArea} ref={textRef} />
            <S.ImgUploadButton onChange={handleFileUpload}>
              <h4 className='sr-only'>이미지 업로드 버튼</h4>
              <MediumImgButton />
            </S.ImgUploadButton>
            {imgFile && <PhotoUploadList imgFile={imgFile} setImgFile={setImgFile} />}
          </S.Form>
        </S.PostWrite>
      </S.Container>
    </>
  );
}
