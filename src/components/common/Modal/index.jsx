import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { deleteProduct, deletePost, getPosts, addCommentReport, addPostReport, deleteComment } from '../../../api';
import * as S from './style';

export function ModalLayout({ children, setIsVisibleModal }) {
  return (
    <S.ModalContainer>
      <h2 className='sr-only'>메뉴 리스트</h2>
      <S.ModalBackground onClick={() => setIsVisibleModal(false)} />
      <S.ModalLists>{children}</S.ModalLists>
    </S.ModalContainer>
  );
}

export function AlertModalLayout({ alertMessage, children }) {
  return (
    <S.AlertModalContainer>
      <h2 className='sr-only'>확인 메시지</h2>
      <S.AlertModalWindow>
        <S.AlertModalMessage>{alertMessage}</S.AlertModalMessage>
        <S.AlertModalLists>{children}</S.AlertModalLists>
      </S.AlertModalWindow>
    </S.AlertModalContainer>
  );
}

export function HeaderBasicModal({ setIsVisibleModal }) {
  const navigate = useNavigate();
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    navigate('/login', { replace: true });
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li>
          <Link to={`/profile/${accountname}`}>설정 및 개인 정보</Link>
        </li>
        <li onClick={() => setIsVisibleAlert(true)}>로그아웃</li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='로그아웃하시겠어요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li onClick={handleLogout}>로그아웃</li>
        </AlertModalLayout>
      )}
    </>
  );
}

export function MyPostModal({ setIsVisibleModal, postId, setPosts, setIsLoading, setHasNextPage, page }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  const handleDelete = async () => {
    const { message, status } = await deletePost(postId);

    if (message === '삭제되었습니다.' && status === '200') {
      setIsVisibleModal(false);
      if (pathname.split('/')[1] === 'profile') {
        setIsLoading(true);
        const post = await getPosts(accountname);

        setPosts([...post]);
        setHasNextPage(post.length === 10);
        page.current += 1;
        setIsLoading(false);
        return;
      }
      navigate(`/profile/${accountname}`, { replace: true });
    }
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>삭제</li>
        <li>
          <Link to={`/post/${postId}/edit`}>수정</Link>
        </li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='게시글을 삭제할까요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li onClick={handleDelete}>삭제</li>
        </AlertModalLayout>
      )}
    </>
  );
}

export function MyProductModal({ setIsVisibleModal, handleProducts, product }) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const { productId, link } = product;

  const handleDelete = async () => {
    const { message, status } = await deleteProduct(productId);

    if (message === '삭제되었습니다.' && status === '200') {
      handleProducts();
      setIsVisibleModal(false);
    }
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>삭제</li>
        <li>
          <Link to={`/product/${productId}/edit`}>수정</Link>
        </li>
        <li>
          <a href={`${link}`} target='_blank' rel='noreferrer'>
            웹사이트에서 상품보기
          </a>
        </li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='상품을 삭제할까요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li onClick={handleDelete}>삭제</li>
        </AlertModalLayout>
      )}
    </>
  );
}

export function MyCommentModal({
  setIsVisibleModal,
  getComments,
  commentId,
  postId,
  post,
  setPost,
  setComments,
  setHasNextPage,
  page,
}) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const handleDelete = async () => {
    const { message, status } = await deleteComment(postId, commentId);

    if (message === '댓글이 삭제되었습니다.' && status === '200') {
      setComments([]);
      setHasNextPage(false);
      page.current = 0;
      getComments();
      setIsVisibleModal(false);
      setPost((prev) => ({ ...prev, commentCount: post.commentCount - 1 }));
    }
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>삭제</li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='댓글을 삭제할까요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li onClick={handleDelete}>삭제</li>
        </AlertModalLayout>
      )}
    </>
  );
}

export function OthersPostCommentModal({ setIsVisibleModal, postId, commentId }) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const handleReport = () => {
    if (commentId) {
      addCommentReport(postId, commentId);
    } else {
      addPostReport(postId);
    }
    setIsVisibleModal(false);
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>신고하기</li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='이 사용자를 신고하시겠어요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li onClick={handleReport}>신고하기</li>
        </AlertModalLayout>
      )}
    </>
  );
}

export function ChatRoomModal({ setIsVisibleModal }) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>채팅방 나가기</li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='채팅방을 나가시겠어요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li>
            <Link to={-1}>나가기</Link>
          </li>
        </AlertModalLayout>
      )}
    </>
  );
}

export function PostAlertModal({ setIsVisibleAlert }) {
  return (
    <S.ModalContainer>
      <S.ModalBackground />
      <AlertModalLayout
        alertMessage='작성 중인 게시글이 삭제되어도 나가시겠어요?'
        setIsVisibleAlert={setIsVisibleAlert}
      >
        <li onClick={() => setIsVisibleAlert(false)}>취소</li>
        <li>
          <Link to={-1}>나가기</Link>
        </li>
      </AlertModalLayout>
    </S.ModalContainer>
  );
}
