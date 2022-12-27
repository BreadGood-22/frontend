import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { axiosPrivate } from '../../../api/apiController';
import { PostList, PostGallery, MyPostModal } from '../../../components';
import { useIntersect } from '../../../hooks/useIntersect';

export function PostsContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { accountname } = useParams();

  const [state, setState] = useState({
    isLoading: false,
    hasNextPage: false,
    page: 0,
  });

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (state.hasNextPage && !state.isLoading) {
      getUserPost();
    }
  });

  const getUserPost = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const {
        data: { post },
      } = await axiosPrivate(`/post/${accountname}/userpost/?limit=10&skip=${state.page * 10}`);

      setPosts((prev) => [...prev, ...post]);
      setState((prev) => ({ ...prev, hasNextPage: post.length === 10, page: prev.page + 1, isLoading: false }));
    } catch (e) {
      setState((prev) => ({ ...prev, isLoading: true }));
      console.error(e);
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    getUserPost();
  }, []);

  const tabs = [
    {
      tabComponent: (
        <S.TabItem key='tab-0'>
          <S.ListButton onClick={() => setActiveIndex(0)} activeIndex={activeIndex}></S.ListButton>
        </S.TabItem>
      ),
      tabContent: <PostList posts={posts} setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />,
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
        <>
          <S.Container>
            <S.TabContainer>
              <S.TabList>{tabs.map((tab) => tab.tabComponent)}</S.TabList>
            </S.TabContainer>
            {tabs[activeIndex].tabContent}
            <div ref={ref}></div>
          </S.Container>
        </>
      )}
      {isVisibleModal && (
        <MyPostModal
          setIsVisibleModal={setIsVisibleModal}
          getUserPost={getUserPost}
          postId={postId}
          setPosts={setPosts}
          setState={setState}
        />
      )}
    </>
  );
}
