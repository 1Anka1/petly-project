import * as SC from './Navigation.styled.js';

export default function Navigation() {
  return (
    <nav>
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
    </nav>
  );
}
