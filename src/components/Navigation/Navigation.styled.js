import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Logo = styled.p`
  margin-right: 80px;
  font: 700 32px/1.5 var(--logo-font);
  letter-spacing: 2.5px;

  & span {
    color: var(--primary-color);
  }
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthListWrapper = styled(NavList)`
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 20px;

  &.active {
    position: relative;
    color: var(--primary-color);
  }

  &.active::before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 1px;
    background-color: var(--primary-color);
  }
`;

export const LogOut = styled.button`
  padding: 10px 28px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 40px;
  border: 1px solid var(--primary-color);
  background-color: var(--light-color);
`;
