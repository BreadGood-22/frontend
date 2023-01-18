import { useEffect } from 'react';
import { chatData } from '../ChatData';
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
            <S.MyMessageItem key={item.date}>
              {item.textMessage && <S.MyTextMessage>{item.textMessage}</S.MyTextMessage>}
              {item.imageMessage && <S.ImageMessage />}
              <S.Time>{item.time}</S.Time>
            </S.MyMessageItem>
          ) : (
            <S.YourMessageItem key={item.date}>
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
