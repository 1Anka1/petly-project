import AuthLink from '../AuthLink/AuthLink.jsx';
import * as SC from './Navigation.styled.js';

export default function Navigation() {
  return (
    <SC.Nav>
      <SC.FrexWrapper>
        <SC.LogoText>
          <SC.StyleLink to="/">
            {' '}
            pe<span>t</span>ly
          </SC.StyleLink>
        </SC.LogoText>
        <SC.List>
          <li>
            <SC.StyleLink to="news">News</SC.StyleLink>
          </li>
          <li>
            <SC.StyleLink to="search">Find pet</SC.StyleLink>
          </li>
          <li>
            <SC.StyleLink to="friends">Our friends</SC.StyleLink>
          </li>
        </SC.List>
      </SC.FrexWrapper>

      <SC.AuthListWrapper>
        <li>
          <AuthLink path="login">Login</AuthLink>
        </li>
        <li>
          <AuthLink path="regisration">Registration</AuthLink>
        </li>
      </SC.AuthListWrapper>
    </SC.Nav>
  );
}
