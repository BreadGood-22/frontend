import { useEffect, useState } from 'react';
import * as S from './style';

export function ChatInput() {
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

  return (
    <S.Container>
      <h2 className='sr-only'>대화 입력창</h2>
      <S.ImageLabel />
      <S.ImageInput />
      <S.TextInput value={text} onChange={(e) => setText(e.target.value)} />
      <S.SubmitButton disabled={isDisabled}>전송</S.SubmitButton>
    </S.Container>
  );
}
