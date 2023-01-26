import { useState } from 'react';
import { ChatList, HeaderBasic } from '../../components';

export function ChatListPage() {
  const [updatedChatData, setUpdatedChatData] = useState([]);

  return (
    <>
      <HeaderBasic />
      <ChatList updatedChatData={updatedChatData} setUpdatedChatData={setUpdatedChatData} />
    </>
  );
}
