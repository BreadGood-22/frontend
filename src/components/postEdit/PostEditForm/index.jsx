import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import { MediumImgButton } from '../../common/Button';
import { HeaderUpload } from '../../common/Header';
import { PhotoUploadList } from '../../postUpload/PhotoUploadList';
import { axiosPrivate } from '../../../api/apiController';

export function PostEditForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [postContent, setPostContent] = useState('');
  const location = useLocation();
  const postId = location.pathname.split('/')[2];

  // 게시글 정보 가져오기
  useEffect(() => {
    const getPostContent = async () => {
      const {
        data: { post },
      } = await axiosPrivate.get(`/post/${postId}`);

      setPostContent(post);
    };

    getPostContent();
  }, []);

  return (
    <>
      <HeaderUpload isDisabled={isDisabled} />
      <S.Container>
        <h2 className='sr-only'>게시글 작성</h2>
        <S.ProfileImg />
        <S.PostWrite>
          <h3 className='sr-only'>게시글 작성 form</h3>
          <S.Form>
            <S.ContentInput />
            <S.ImgUploadButton>
              <h4 className='sr-only'>이미지 업로드 버튼</h4>
              <MediumImgButton />
            </S.ImgUploadButton>
            <PhotoUploadList />
          </S.Form>
        </S.PostWrite>
      </S.Container>
    </>
  );
}
