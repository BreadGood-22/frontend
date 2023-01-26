import { useEffect } from 'react';
import { chatData } from '../chatData';
import * as S from './style';

export function ChatContents({ updatedChatData, setUpdatedChatData }) {
  useEffect(() => {
    setUpdatedChatData(chatData);
  }, []);

  return (
    <main>
      <h2 className='sr-only'>대화 본문</h2>
      <S.ChatContents>
        {updatedChatData.map((item) =>
          item.author === 'me' ? (
            <S.MyMessageItem key={crypto.randomUUID()}>
              {item.textMessage && <S.MyTextMessage>{item.textMessage}</S.MyTextMessage>}
              {item.imageMessage && <S.ImageMessage />}
              <S.Time>{item.time}</S.Time>
            </S.MyMessageItem>
          ) : (
            <S.YourMessageItem key={crypto.randomUUID()}>
              <S.YourProfileImage />
              {item.textMessage && <S.YourTextMessage>{item.textMessage}</S.YourTextMessage>}
              {item.imageMessage && <S.ImageMessage />}
              <S.Time>{item.time}</S.Time>
            </S.YourMessageItem>
          ),
        )}
      </S.ChatContents>
    </main>
  );
}
