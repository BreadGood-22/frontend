import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { PhotoUploadList } from '../../postUpload/PhotoUploadList';
import { MediumImgButton, HeaderUpload, PostAlertModal } from '../../index';
import { axiosPrivate, axiosImg, BASE_URL } from '../../../api/apiController';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function PostEditForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [profile, setProfile] = useState('');
  const [text, setText] = useState('');
  const [postImg, setPostImg] = useState([]);
  // const [imgPrev, setImgPrev] = useState('');
  // const [imgUrl, setImgUrl] = useState('');
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const location = useLocation();
  const textRef = useRef();
  const navigate = useNavigate();
  const postId = location.pathname.split('/')[2];
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const MAX_UPLOAD = 3;

  // 게시글 콘텐츠 및 이미지 가져오기
  const getPostContent = async () => {
    setIsLoading(true);
    try {
      const {
        data: {
          post: { content, image },
        },
      } = await axiosPrivate.get(`/post/${postId}`);

      const postImg = image.split(',');

      setText(content);
      setPostImg(postImg);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  // 프로필 이미지 가져오기
  const getProfile = async () => {
    setIsLoading(true);
    try {
      const {
        data: {
          profile: { image },
        },
      } = await axiosPrivate.get(`/profile/${accountname}`);

      setProfile(image);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPostContent();
    getProfile();
  }, []);

  // profile image 렌더링
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
      alert('이미지는 3장까지 업로드 가능합니다');
    }
  };

  // 포스트 수정 업로드
  const handlePostUpload = async () => {
    setIsLoading(true);
    try {
      const res = await axiosPrivate.put(`/post/${postId}`, {
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

  // 업로드 버튼 컨트롤
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
