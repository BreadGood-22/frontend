import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { axiosPrivate } from '../../../api/apiController';

import { ReactComponent as PostListIconOn } from '../../../assets/icons/icon-post-list-on.svg';
import { ReactComponent as PostListIconOff } from '../../../assets/icons/icon-post-list-off.svg';
import { ReactComponent as PostGalleryIconOn } from '../../../assets/icons/icon-post-gallery-on.svg';
import { ReactComponent as PostGalleryIconOff } from '../../../assets/icons/icon-post-gallery-off.svg';

import { PostList } from '../../common/PostList';
import { PostGallery } from '../PostGallery';

export function PostsContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [posts, setPosts] = useState([]);
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
      tabContent: <PostList posts={posts} />,
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
    </>
  );
}
