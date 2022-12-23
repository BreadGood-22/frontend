import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import { PhotoUploadList } from '../../postUpload/PhotoUploadList';
import { MediumImgButton } from '../../common/Button';
import { HeaderUpload } from '../../common/Header';
import { axiosPrivate, axiosImg } from '../../../api/apiController';

export function PostEditForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [profile, setProfile] = useState('');
  const [text, setText] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const location = useLocation();
  const textRef = useRef();
  const navigate = useNavigate();
  const postId = location.pathname.split('/')[2];
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  // 게시글 콘텐츠 및 이미지 가져오기
  const getPostContent = async () => {
    const {
      data: {
        post: { content, image },
      },
    } = await axiosPrivate.get(`/post/${postId}`);

    setText(content);
    setImgFile(image);
    setImgUrl(image);
  };

  // 프로필 이미지 가져오기
  const renderProfile = async () => {
    const {
      data: {
        profile: { image },
      },
    } = await axiosPrivate.get(`/profile/${accountname}`);

    setProfile(image);
  };

  useEffect(() => {
    getPostContent();
    renderProfile();
  }, []);

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

  // 포스트 수정 업로드
  const handlePostUpload = async () => {
    const res = await axiosPrivate.put(`/post/${postId}`, {
      post: {
        content: text,
        image: imgUrl,
      },
    });

    navigate(`/profile/${accountname}`);
  };

  // 업로드 버튼 컨트롤
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
        <S.ProfileImg src={profile} />
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput onInput={handleTextArea} ref={textRef} defaultValue={text} />
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