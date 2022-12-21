import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../../api/apiController';
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

export function HeaderBasicModal({ setIsVisibleModal, accountname }) {
  const navigate = useNavigate();
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    navigate('/login', { replace: true });
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li>
          <Link to={`profile/${accountname}/edit`}>설정 및 개인 정보</Link>
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

export function MyPostModal({ setIsVisibleModal, getUserPost, postId }) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  const handleDelete = async () => {
    const {
      data: { message, status },
    } = await axiosPrivate.delete(`/post/${postId}`);

    if (message === '삭제되었습니다.' && status === '200') {
      getUserPost();
      setIsVisibleModal(false);
    }
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>삭제</li>
        <li>
          {/* Link 시 state 값으로 해당 post 넘기기 */}
          <Link to={`post/${postId}/edit`}>수정</Link>
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

export function MyProductModal({ setIsVisibleModal, getProducts, product }) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const { productId, link } = product;

  const handleDelete = async () => {
    const {
      data: { message, status },
    } = await axiosPrivate.delete(`/product/${productId}`);

    if (message === '삭제되었습니다.' && status === '200') {
      getProducts();
      setIsVisibleModal(false);
    }
  };

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>삭제</li>
        <li>
          <Link to={`/product/${productId}`}>수정</Link>
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

export function MyCommentModal({ setIsVisibleModal }) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>삭제</li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='댓글을 삭제할까요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li>삭제</li>
        </AlertModalLayout>
      )}
    </>
  );
}

export function OthersPostCommentModal({ setIsVisibleModal }) {
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

  return (
    <>
      <ModalLayout setIsVisibleModal={setIsVisibleModal}>
        <li onClick={() => setIsVisibleAlert(true)}>신고하기</li>
      </ModalLayout>
      {isVisibleAlert && (
        <AlertModalLayout alertMessage='이 사용자를 신고하시겠어요?' setIsVisibleAlert={setIsVisibleAlert}>
          <li onClick={() => setIsVisibleModal(false)}>취소</li>
          <li>신고하기</li>
        </AlertModalLayout>
      )}
    </>
  );
}
