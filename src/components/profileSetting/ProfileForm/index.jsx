import React from 'react';
import * as S from './style';
import { Label, NameInput, IDInput, IntroduceInput, LargeButton } from '../../index';

export function ProfileForm() {
  return (
    <S.Form>
      <S.ImgWrapper>
        <S.Img />
        <S.UploadImg />
      </S.ImgWrapper>
      <Label>사용자 이름</Label>
      <NameInput />
      <Label>계정 ID</Label>
      <IDInput />
      <S.WarningText isVisible={true}>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</S.WarningText>
      <S.WarningText isVisible={true}>*이미 사용중인 ID입니다.</S.WarningText>
      <Label>소개</Label>
      <IntroduceInput />
      <LargeButton content='빵굿빵굿 시작하기' disabled={false}></LargeButton>
    </S.Form>
  );
}
