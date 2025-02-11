import * as SC from './AuthLink.styled.js';

export default function AuthLink({ children, path }) {
  return <SC.StyledLink to={path}>{children}</SC.StyledLink>;
}
