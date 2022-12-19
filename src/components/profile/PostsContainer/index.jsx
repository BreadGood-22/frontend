import { useState } from 'react';
import * as S from './style';

import { ReactComponent as PostListIconOn } from '../../../assets/icons/icon-post-list-on.svg';
import { ReactComponent as PostListIconOff } from '../../../assets/icons/icon-post-list-off.svg';
import { ReactComponent as PostGalleryIconOn } from '../../../assets/icons/icon-post-gallery-on.svg';
import { ReactComponent as PostGalleryIconOff } from '../../../assets/icons/icon-post-gallery-off.svg';

import { PostList } from '../PostList';
import { PostGallery } from '../PostGallery';

export function PostsContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      tabComponent: (
        <S.TabItem>
          <S.TabButton onClick={() => setActiveIndex(0)}>
            {activeIndex === 0 ? <PostListIconOn /> : <PostListIconOff />}
          </S.TabButton>
        </S.TabItem>
      ),
      tabContent: <PostList />,
    },
    {
      tabComponent: (
        <S.TabItem>
          <S.TabButton onClick={() => setActiveIndex(1)}>
            {activeIndex === 1 ? <PostGalleryIconOn /> : <PostGalleryIconOff />}
          </S.TabButton>
        </S.TabItem>
      ),
      tabContent: <PostGallery />,
    },
  ];

  return (
    <S.Container>
      <S.TabContainer>
        <S.TabList>{tabs.map((tab, index) => tab.tabComponent)}</S.TabList>
      </S.TabContainer>
      {tabs[activeIndex].tabContent}
    </S.Container>
  );
}
