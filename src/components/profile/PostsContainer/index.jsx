import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { axiosPrivate } from '../../../api/apiController';
import { PostList, PostGallery, MyPostModal, OthersPostCommentModal } from '../../../components';
import useIntersect from '../../../hooks/useIntersect';

export function PostsContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const { accountname } = useParams();
  const isMyPost = accountname === JSON.parse(localStorage.getItem('accountname'));

  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const page = useRef(0);

  const ref = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading) {
      getUserPost();
    }
  });

  const getUserPost = async () => {
    setIsLoading(true);
    try {
      const {
        data: { post },
      } = await axiosPrivate(`/post/${accountname}/userpost/?limit=10&skip=${page.current * 10}`);

      setPosts((prev) => [...prev, ...post]);
      setHasNextPage(post.length === 10);
      page.current += 1;
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setPosts([]);
    setHasNextPage(false);
    page.current = 0;
    getUserPost();
  }, [accountname]);

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
      {isVisibleModal &&
        (isMyPost ? (
          <MyPostModal
            setIsVisibleModal={setIsVisibleModal}
            getUserPost={getUserPost}
            postId={postId}
            setPosts={setPosts}
            setIsLoading={setIsLoading}
            setHasNextPage={setHasNextPage}
            page={page}
          />
        ) : (
          <OthersPostCommentModal setIsVisibleModal={setIsVisibleModal} postId={postId} />
        ))}
    </>
  );
}
