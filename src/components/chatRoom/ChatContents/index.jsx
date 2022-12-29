import * as S from './style';

export function ChatContents() {
  const chatData = [
    {
      author: 'you',
      textMessage: '빵굿이 굿즈 이번엔 안 만드시나요!!!!! 지난 번 마켓 때 놓쳤는데 계속 생각나요 😭',
      imageMessage: '',
      date: '22:17',
    },
    {
      author: 'you',
      textMessage: '',
      imageMessage: 'imageExample',
      date: '22:18',
    },
    {
      author: 'me',
      textMessage: '지금 준비 중에 있습니다! 3월에 빵굿이 굿즈 안내가 나갈 예정이에요!',
      imageMessage: '',
      date: '22:33',
    },
    {
      author: 'me',
      textMessage: '관심 가져주셔서 고맙습니다! 🥰',
      imageMessage: '',
      date: '22:33',
    },
  ];

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
