import { useEffect, useState } from 'react';
import * as S from './style';

export function ChatInput({ setUpdatedChatData, updatedChatData }) {
  const [text, setText] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!!text || !!imageURL) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [text, imageURL]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleDate = () => {
      const now = new Date();
      const date = now.toLocaleString();
      const time = now.toLocaleTimeString().slice(0, -3);

      return { date, time };
    };

    const { date, time } = handleDate();

    const newChatData = {
      author: 'me',
      textMessage: text,
      imageMessage: '',
      date,
      time,
    };

    setUpdatedChatData([...updatedChatData, newChatData]);
    setText('');
  };

  return (
    <footer>
      <h2 className='sr-only'>대화 입력창</h2>
      <S.Form onSubmit={handleSubmit}>
        <S.ImageLabel />
        <S.ImageInput />
        <S.TextInput value={text} onChange={(e) => setText(e.target.value)} />
        <S.SubmitButton disabled={isDisabled}>전송</S.SubmitButton>
      </S.Form>
    </footer>
  );
}
