import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 16px;
`;

export const LogoText = styled.p`
  margin-right: 80px;
  font: 700 32px/1.5 var(--logo-font);
  letter-spacing: 2.5px;

  & span {
    color: var(--primary-color);
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

export const StyleLink = styled(NavLink)``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthListWrapper = styled(List)`
  gap: 20px;
`;
