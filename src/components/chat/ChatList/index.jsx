import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { chatData } from '../chatData';
import * as S from './style';

export function ChatList({ updatedChatData, setUpdatedChatData }) {
  useEffect(() => {
    setUpdatedChatData(chatData[chatData.length - 1]);
  }, []);

  return (
    <>
      <S.Contents to='/chat/room'>
        <h2 className='sr-only'>채팅 리스트</h2>
        <S.YourProfileImage />
        <S.MessageContents>
          <h3 className='sr-only'>채팅 내용 미리보기</h3>
          <S.YourName>빵굿이 쳐돌이</S.YourName>
          {updatedChatData.textMessage ? (
            <S.YourMessage>{updatedChatData.textMessage}</S.YourMessage>
          ) : (
            <S.YourMessage>이미지</S.YourMessage>
          )}
        </S.MessageContents>
        <S.Date>{updatedChatData.date}</S.Date>
      </S.Contents>
    </>
  );
}
