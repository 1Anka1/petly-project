import { NavLink } from 'react-router-dom';
import AuthLink from '../AuthLink/AuthLink.jsx';
import * as SC from './Navigation.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/selectors.js';
import { logOut } from '../../redux/userSlice/userSlice.js';

export default function Navigation() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

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
            <SC.NavigationLink to="news">News</SC.NavigationLink>
          </li>
          <li>
            <SC.NavigationLink to="search">Find pet</SC.NavigationLink>
          </li>
          <li>
            <SC.NavigationLink to="friends">Our friends</SC.NavigationLink>
          </li>
        </SC.NavList>
      </SC.NavContainer>

      <SC.AuthListWrapper>
        {user.isLogged ? (
          <>
            <li>
              <AuthLink path="">Account</AuthLink>
            </li>
            <SC.LogOut type="button" onClick={() => dispatch(logOut())}>
              Log out
            </SC.LogOut>
          </>
        ) : (
          <>
            <li>
              <AuthLink path="login">Login</AuthLink>
            </li>
            <li>
              <AuthLink path="registration">Registration</AuthLink>
            </li>
          </>
        )}
      </SC.AuthListWrapper>
    </SC.NavBar>
  );
}
