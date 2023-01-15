import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../api/apiController';
import { addImage, getUserInfo, addPost } from '../../../api';
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

  const getProfile = async () => {
    setIsLoading(true);

    await getUserInfo({ accountname }).then(({ image }) => {
      setProfile(image);
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (profile !== `${BASE_URL}/Ellipse.png`) profileImage = profile;

    return <S.ProfileImg src={profileImage} />;
  };

  const handleTextArea = (e) => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    setText(e.target.value);
  };

  const handleGetImageUrl = async (e) => {
    setIsLoading(true);

    if (postImg.length < MAX_UPLOAD) {
      const file = e.target.files[0];
      const imgUrl = await addImage(file);
      const copyPostImg = [...postImg];

      copyPostImg.push(imgUrl);
      setPostImg(copyPostImg);
      e.target.value = '';
    } else {
      alert('이미지는 3장까지 업로드 가능합니다');
    }

    setIsLoading(false);
  };

  const handlePostUpload = async () => {
    const images = postImg.join(',');

    setIsLoading(true);

    await addPost({ text, images }).then(() => navigate(`/profile/${accountname}`));

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
            {postImg.length === 0 ? null : <PhotoUploadList imgSrc={postImg} setPostImg={setPostImg} />}
          </S.Form>
        </S.PostWrite>
      </S.Container>
      {isVisibleAlert && <PostAlertModal setIsVisibleAlert={setIsVisibleAlert} />}
    </>
  );
}
