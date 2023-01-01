import styled, { keyframes } from 'styled-components';

export const SlideUp = keyframes`
 from{
   transform: translate(-50%, 50px)
 }
 to{
   transform: translateX(-50%)
 }
 `;

export const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalLists = styled.ul`
  width: 390px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  padding: 36px 0 10px;
  border-radius: 10px 10px 0 0;
  z-index: 200;
  background-color: ${({ theme }) => theme.palette.white};
  animation: ${SlideUp} 0.4s ease-out;

  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 4px;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.palette.lightGray};
    border-radius: 5px;
  }

  & > li {
    height: 46px;
    padding-left: 26px;
    font-size: 14px;
    line-height: 46px;
    cursor: pointer;
  }

  & > li > a {
    display: block;
  }
`;

export const AlertModalContainer = styled(ModalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const AlertModalWindow = styled.div`
  width: 252px;
  text-align: center;
  border-radius: 10px;
  z-index: 300;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const AlertModalMessage = styled.strong`
  display: block;
  padding: 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;
export const AlertModalLists = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & > li {
    width: 50%;
    padding: 14px 0;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }

  & > li:last-child {
    color: ${({ theme }) => theme.palette.brown};
    border-left: 0.5px solid ${({ theme }) => theme.palette.lightGray};
  }
`;
