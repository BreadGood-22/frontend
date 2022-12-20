import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);

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
          <li>로그아웃</li>
        </AlertModalLayout>
      )}
    </>
  );
}
