import styled from 'styled-components';
import IconArrowLeft from '../../../assets/icons/icon-arrow-left.svg';
import IconMoreVertical from '../../../assets/icons/icon-more-vertical.svg';
import IconSearch from '../../../assets/icons/icon-search.svg';

export const HeaderContainer = styled.header`
  height: 48px;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.white};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;

export const PreviousIcon = styled.img.attrs({
  src: IconArrowLeft,
  alt: '뒤로가기',
})`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const SettingIcon = styled.img.attrs({
  src: IconMoreVertical,
  alt: '더보기',
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const SearchIcon = styled.img.attrs({
  src: IconSearch,
  alt: '검색하기',
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const HeaderInput = styled.input.attrs({
  type: 'text',
  placeholder: '계정 검색',
})`
  width: 316px;
  height: 32px;
  padding: 8px 16px 7px;
  border-radius: 32px;
  border: none;
  background-color: ${({ theme }) => theme.palette.whitishGray};
  color: ${({ theme }) => theme.palette.black};
  ::placeholder {
    color: ${({ theme }) => theme.palette.mediumGray};
    font-size: 14px;
    line-height: 18px;
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.palette.darkGray};
  }
`;

export const HeaderMainText = styled.p`
  height: 22px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export const HeaderChatText = styled.p`
  height: 22px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-left: 10px;
  margin-right: auto;
`;

export const HeaderFollowersText = styled.p`
  display: flex;
  height: 22px;
  font-size: 14px;
  margin-left: 8px;
  margin-right: auto;
  align-items: center;
`;
