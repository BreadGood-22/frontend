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
  const [postImg, setPostImg] = useState([]);
  const [profile, setProfile] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const textRef = useRef();
  const navigate = useNavigate();
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const MAX_UPLOAD = 3;

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
  const handleFileUpload = async (file) => {
    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append('image', file);

      const { data } = await axiosImg.post('/image/uploadfile', formData);

      return `${BASE_URL}/${data.filename}`;
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  const handleGetImageUrl = async (e) => {
    if (postImg.length < MAX_UPLOAD) {
      const file = e.target.files[0];
      const imgUrl = await handleFileUpload(file);
      const copyPostImg = [...postImg];

      copyPostImg.push(imgUrl);
      setPostImg(copyPostImg);
    } else {
      alert('이미지 3개까지');
    }
  };

  // 포스트 업로드
  const handlePostUpload = async () => {
    setIsLoading(true);

    try {
      await axiosPrivate.post('/post', {
        post: {
          content: text,
          image: postImg.join(','),
        },
      });

      navigate(`/profile/${accountname}`);
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (text || postImg.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [text, postImg]);

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
            <S.ImgUploadButton onChange={handleGetImageUrl}>
              <h4 className='sr-only'>이미지 업로드 버튼</h4>
              <MediumImgButton />
            </S.ImgUploadButton>
            {/* {imgPrev && <PhotoUploadList imgPrev={imgPrev} setImgPrev={setImgPrev} setImgUrl={setImgUrl} />} */}
          </S.Form>
        </S.PostWrite>
      </S.Container>
      {isVisibleAlert && <PostAlertModal setIsVisibleAlert={setIsVisibleAlert} />}
    </>
  );
}
