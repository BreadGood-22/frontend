import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ChatIcon from '../../../assets/icons/icon-chat.png';
import ChatIconActive from '../../../assets/icons/icon-chat-fill.png';
import PostIcon from '../../../assets/icons/icon-post.png';
import PostIconActive from '../../../assets/icons/icon-post-fill.png';
import HomeIcon from '../../../assets/icons/icon-home.png';
import HomeIconActive from '../../../assets/icons/icon-home-fill.png';
import ProfileIcon from '../../../assets/icons/icon-profile.png';
import ProfileIconActive from '../../../assets/icons/icon-profile-fill.png';

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 10;
  border-top: 1px solid ${({ theme }) => theme.palette.lightGray};
  width: 100%;
  max-width: 390px;
  height: 60px;
  padding: 0 6px;
`;

export const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled.li`
  width: 84px;
`;

export const MenuLink = styled(NavLink)`
  display: block;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.palette.darkGray};
  &::before {
    content: '';
    background: no-repeat center / contain;
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    margin-bottom: 4px;
  }
`;

export const HomeLink = styled(MenuLink)`
  &::before {
    background-image: url(${HomeIcon});
  }
  &.active {
    color: ${({ theme }) => theme.palette.brown};
    &::before {
      background-image: url(${HomeIconActive});
    }
  }
`;

export const ChatLink = styled(MenuLink)`
  &::before {
    background-image: url(${ChatIcon});
  }
  &.active {
    color: ${({ theme }) => theme.palette.brown};
    &::before {
      background-image: url(${ChatIconActive});
    }
  }
`;

export const PostLink = styled(MenuLink)`
  &::before {
    background-image: url(${PostIcon});
  }
  &.active {
    color: ${({ theme }) => theme.palette.brown};
    &::before {
      background-image: url(${PostIconActive});
    }
  }
`;

export const ProfileLink = styled(MenuLink)`
  &::before {
    background-image: url(${ProfileIcon});
  }
  &.active {
    color: ${({ theme }) => theme.palette.brown};
    &::before {
      background-image: url(${ProfileIconActive});
    }
  }
`;
