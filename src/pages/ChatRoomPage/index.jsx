import { useState } from 'react';
import { ChatInput, ChatContents, HeaderChat, ChatRoomModal } from '../../components';

export function ChatRoomPage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <>
      <HeaderChat setIsVisibleModal={setIsVisibleModal}>빵굿이쳐돌이</HeaderChat>
      <ChatContents />
      <ChatInput />
      {isVisibleModal && <ChatRoomModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
