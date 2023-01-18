import { chatData } from '../ChatData';
import * as S from './style';

export function ChatContents() {
  return (
    <main>
      <h2 className='sr-only'>대화 본문</h2>
      <S.ChatContents>
        {chatData.map((item) =>
          item.author === 'me' ? (
            <S.MyMessageItem>
              {item.textMessage && <S.MyTextMessage>{item.textMessage}</S.MyTextMessage>}
              {item.imageMessage && <S.ImageMessage />}
              <S.Date>{item.date}</S.Date>
            </S.MyMessageItem>
          ) : (
            <S.YourMessageItem>
              <S.YourProfileImage />
              {item.textMessage && <S.YourTextMessage>{item.textMessage}</S.YourTextMessage>}
              {item.imageMessage && <S.ImageMessage />}
              <S.Date>{item.date}</S.Date>
            </S.YourMessageItem>
          ),
        )}
      </S.ChatContents>
    </main>
  );
}
