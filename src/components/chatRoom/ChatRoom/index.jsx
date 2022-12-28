import { useState } from 'react';
import { ChatInput } from '../ChatInput';
import { HeaderChat, ChatRoomModal } from '../../index';
import * as S from './style';

export function ChatRoom() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <>
      <HeaderChat setIsVisibleModal={setIsVisibleModal}>빵굿이쳐돌이</HeaderChat>
      <main>
        <h2 className='sr-only'>대화 본문</h2>
        <S.Container>
          <S.YourMessageItem>
            <S.YourProfileImage />
            <S.YourTextMessage>
              빵굿이 굿즈 이번엔 안 만드시나요!!!!! 지난 번 마켓 때 놓쳤는데 계속 생각나요 😭
            </S.YourTextMessage>
            <S.Date>22:17</S.Date>
          </S.YourMessageItem>
          <S.YourMessageItem>
            <S.YourProfileImage />
            <S.ImageMessage src='' alt='' />
            <S.Date>22:18</S.Date>
          </S.YourMessageItem>
          <S.MyMessageItem>
            <S.MyTextMessage>지금 준비 중에 있습니다! 3월에 빵굿이 굿즈 안내가 나갈 예정이에요!</S.MyTextMessage>
            <S.Date>22:33</S.Date>
          </S.MyMessageItem>
          <S.MyMessageItem>
            <S.MyTextMessage>관심 가져주셔서 고맙습니다! 🥰</S.MyTextMessage>
            <S.Date>22:33</S.Date>
          </S.MyMessageItem>
        </S.Container>
      </main>
      <ChatInput />
      {isVisibleModal && <ChatRoomModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
