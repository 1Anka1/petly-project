import { NavLink } from 'react-router-dom';
import AuthLink from '../AuthLink/AuthLink.jsx';
import * as SC from './Navigation.styled.js';

export default function Navigation() {
  return (
    <SC.NavBar>
      <SC.NavContainer>
        <SC.Logo>
          <NavLink to="/">
            pe<span>t</span>ly
          </NavLink>
        </SC.Logo>

        <SC.NavList>
          <li>
            <NavLink to="news">News</NavLink>
          </li>
          <li>
            <NavLink to="search">Find pet</NavLink>
          </li>
          <li>
            <NavLink to="friends">Our friends</NavLink>
          </li>
        </SC.NavList>
      </SC.NavContainer>

      <SC.AuthListWrapper>
        <li>
          <AuthLink path="login">Login</AuthLink>
        </li>
        <li>
          <AuthLink path="registration">Registration</AuthLink>
        </li>
      </SC.AuthListWrapper>
    </SC.NavBar>
  );
}
