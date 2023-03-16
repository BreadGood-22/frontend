import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addImage, getUserInfo, addPost } from '../../../api';
import * as S from './style';
import { PhotoUploadList } from '../PhotoUploadList';
import { MediumImgButton, HeaderUpload, PostAlertModal } from '../../index';
import { renderProfile } from '../../../utils/renderProfile';
import useTextareaHeight from '../../../hooks/useTextareaHeight';

export function PostUploadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  const [postImg, setPostImg] = useState([]);
  const [profile, setProfile] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const navigate = useNavigate();
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const MAX_UPLOAD = 3;

  const ref = useTextareaHeight(text);
  const profileImage = renderProfile(profile);

  const getProfile = async () => {
    setIsLoading(true);

    const { image } = await getUserInfo(accountname);

    setProfile(image);

    setIsLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

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

    await addPost(text, images);
    navigate(`/profile/${accountname}`);

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
        <S.ProfileImg src={profileImage} />
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput
              onInput={(e) => {
                setText(e.target.value);
              }}
              ref={ref}
            />
            <S.ImgUploadButton onChange={handleGetImageUrl}>
              <h4 className='sr-only'>이미지 업로드 버튼</h4>
              <MediumImgButton />
            </S.ImgUploadButton>
            {postImg.length > 0 && <PhotoUploadList imgSrc={postImg} setPostImg={setPostImg} />}
          </S.Form>
        </S.PostWrite>
      </S.Container>
      {isVisibleAlert && <PostAlertModal setIsVisibleAlert={setIsVisibleAlert} />}
    </>
  );
}
