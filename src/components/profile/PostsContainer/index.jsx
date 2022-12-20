import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { axiosPrivate } from '../../../api/apiController';
import { PostList, PostGallery, MyPostModal } from '../../../components';

export function PostsContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { accountname } = useParams();

  useEffect(() => {
    const getUserPost = async () => {
      const {
        data: { post },
      } = await axiosPrivate(`/post/${accountname}/userpost`);

      setPosts(post);
    };

    getUserPost();
  }, []);

  const tabs = [
    {
      tabComponent: (
        <S.TabItem key='tab-0'>
          <S.ListButton onClick={() => setActiveIndex(0)} activeIndex={activeIndex}></S.ListButton>
        </S.TabItem>
      ),
      tabContent: <PostList posts={posts} setIsVisibleModal={setIsVisibleModal} />,
    },
    {
      tabComponent: (
        <S.TabItem key='tab-1'>
          <S.GalleryButton onClick={() => setActiveIndex(1)} activeIndex={activeIndex}></S.GalleryButton>
        </S.TabItem>
      ),
      tabContent: <PostGallery posts={posts} />,
    },
  ];

  return (
    <>
      {posts.length === 0 || (
        <S.Container>
          <S.TabContainer>
            <S.TabList>{tabs.map((tab, index) => tab.tabComponent)}</S.TabList>
          </S.TabContainer>
          {tabs[activeIndex].tabContent}
        </S.Container>
      )}
      {isVisibleModal && <MyPostModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
