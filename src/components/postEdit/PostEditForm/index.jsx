import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { PhotoUploadList } from '../../postUpload/PhotoUploadList';
import { MediumImgButton, HeaderUpload, PostAlertModal } from '../../index';
import { BASE_URL } from '../../../api/apiController';
import { addImage, getUserInfo, getPost, updatePost } from '../../../api';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function PostEditForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [profile, setProfile] = useState('');
  const [text, setText] = useState('');
  const [postImg, setPostImg] = useState([]);
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const location = useLocation();
  const textRef = useRef();
  const navigate = useNavigate();
  const postId = location.pathname.split('/')[2];
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const MAX_UPLOAD = 3;

  const getProfile = async () => {
    setIsLoading(true);

    const { image } = await getUserInfo(accountname);

    setProfile(image);
    setIsLoading(false);
  };

  const getPostContent = async () => {
    setIsLoading(true);

    const { content, image } = await getPost(postId);

    setText(content);
    setPostImg(image.split(','));

    setIsLoading(false);
  };

  useEffect(() => {
    getPostContent();
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
  };

  const handlePostUpload = async () => {
    const images = postImg.join(',');

    setIsLoading(true);

    await updatePost(postId, text, images);
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
        {renderProfileImage()}
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput onInput={handleTextArea} ref={textRef} defaultValue={text} />
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
