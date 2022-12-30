import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate, axiosImg, BASE_URL } from '../../../api/apiController';
import * as S from './style';
import { PhotoUploadList } from '../PhotoUploadList';
import { MediumImgButton, HeaderUpload, PostAlertModal } from '../../index';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function PostUploadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  const [imgPrev, setImgPrev] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [profile, setProfile] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const textRef = useRef();
  const navigate = useNavigate();
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  // profile image 불러오기
  const getProfile = async () => {
    setIsLoading(true);
    try {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${accountname}`);

      setProfile(profile);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const { image } = profile;

  // profile image 렌더링
  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (image !== `${BASE_URL}/Ellipse.png`) profileImage = image;

    return <S.ProfileImg src={profileImage} />;
  };

  // 텍스트 input창의 높이 조절 및 텍스트 value 저장
  const handleTextArea = (e) => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    setText(e.target.value);
  };

  // 이미지 업로드
  const handleFileUpload = async (e) => {
    setIsLoading(true);

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    try {
      const { data } = await axiosImg.post('/image/uploadfile', formData);

      setImgUrl(`${BASE_URL}/${data.filename}`);
      setImgPrev(URL.createObjectURL(file));
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  // 포스트 업로드
  const handlePostUpload = async () => {
    setIsLoading(true);
    try {
      const res = await axiosPrivate.post('/post', {
        post: {
          content: text,
          image: imgUrl,
        },
      });

      navigate(`/profile/${accountname}`);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (text || imgPrev) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [text, imgPrev]);

  return (
    <>
      <HeaderUpload isDisabled={isDisabled} handlePostUpload={handlePostUpload} setIsVisibleAlert={setIsVisibleAlert} />
      <S.Container>
        <h2 className='sr-only'>게시글 작성</h2>
        {renderProfileImage()}
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput onInput={handleTextArea} ref={textRef} />
            <S.ImgUploadButton onChange={handleFileUpload}>
              <h4 className='sr-only'>이미지 업로드 버튼</h4>
              <MediumImgButton />
            </S.ImgUploadButton>
            {imgPrev && <PhotoUploadList imgPrev={imgPrev} setImgPrev={setImgPrev} setImgUrl={setImgUrl} />}
          </S.Form>
        </S.PostWrite>
      </S.Container>
      {isVisibleAlert && <PostAlertModal setIsVisibleAlert={setIsVisibleAlert} />}
    </>
  );
}
