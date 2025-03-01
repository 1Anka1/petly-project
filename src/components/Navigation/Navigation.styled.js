import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
