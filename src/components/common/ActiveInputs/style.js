import styled from 'styled-components';

// Label 공통 스타일
export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: ${({ theme }) => theme.palette.darkGray};
`;

// activeInput 공통 스타일
export const ActiveTextInput = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.palette.lightGray};
  }
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.palette.brown};
  }
`;

// 이메일
export const EmailInput = styled(ActiveTextInput).attrs({
  type: 'email',
  id: 'email',
})``;

// 비밀번호
export const PasswordInput = styled(ActiveTextInput).attrs({
  type: 'password',
  id: 'password',
})``;

// 사용자 이름
export const NameInput = styled(ActiveTextInput).attrs({
  type: 'text',
  id: 'name',
  placeholder: '2~10자 이내여야 합니다.',
})``;

// 계정 ID
export const IDInput = styled(ActiveTextInput).attrs({
  type: 'text',
  id: 'accountId',
  placeholder: '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.',
})``;

// 소개
export const IntroduceInput = styled(ActiveTextInput).attrs({
  type: 'text',
  id: 'introduce',
  placeholder: '자신과 판매할 상품에 대해 소개해 주세요!',
})``;
