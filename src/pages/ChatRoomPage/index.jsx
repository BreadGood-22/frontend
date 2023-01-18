import { useState } from 'react';
import { ChatInput, ChatContents, HeaderChat, ChatRoomModal } from '../../components';

export function ChatRoomPage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [updatedChatData, setUpdatedChatData] = useState([]);

  return (
    <>
      <HeaderChat setIsVisibleModal={setIsVisibleModal}>빵굿이쳐돌이</HeaderChat>
      <ChatContents updatedChatData={updatedChatData} setUpdatedChatData={setUpdatedChatData} />
      <ChatInput updatedChatData={updatedChatData} setUpdatedChatData={setUpdatedChatData} />
      {isVisibleModal && <ChatRoomModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
