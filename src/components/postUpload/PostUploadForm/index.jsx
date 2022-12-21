import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate, axiosImg } from '../../../api/apiController';
import * as S from './style';
import { PhotoUploadList } from '../PhotoUploadList';
import { MediumImgButton } from '../../common/Button';
import { HeaderUpload } from '../../common/Header';

export function PostUploadForm() {
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [profile, setProfile] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const textRef = useRef();
  const navigate = useNavigate();
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  // profile image 불러오기
  useEffect(() => {
    const renderProfile = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${accountname}`);

      setProfile(profile);
    };

    renderProfile();
  }, []);

  const { image } = profile;

  // 텍스트 input창의 높이 조절 및 텍스트 value 저장
  const handleTextArea = (e) => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    setText(e.target.value);
  };

  // 이미지 업로드
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);
    const { data } = await axiosImg.post('/image/uploadfile', formData);

    setImgUrl(`http://146.56.183.55:5050/${data.filename}`);
    setImgFile(URL.createObjectURL(file));
  };

  // 포스트 업로드
  const handlePostUpload = async () => {
    const res = await axiosPrivate.post('/post', {
      post: {
        content: text,
        image: imgUrl,
      },
    });

    navigate(`/profile/${accountname}`);
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
      <HeaderUpload isDisabled={isDisabled} handlePostUpload={handlePostUpload} />
      <S.Container>
        <h2 className='sr-only'>게시글 작성</h2>
        <S.ProfileImg src={image} />
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput onInput={handleTextArea} ref={textRef} />
            <S.ImgUploadButton onChange={handleFileUpload}>
              <h4 className='sr-only'>이미지 업로드 버튼</h4>
              <MediumImgButton />
            </S.ImgUploadButton>
            {imgFile && <PhotoUploadList imgFile={imgFile} setImgFile={setImgFile} setImgUrl={setImgUrl} />}
          </S.Form>
        </S.PostWrite>
      </S.Container>
    </>
  );
}
