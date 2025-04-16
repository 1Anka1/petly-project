import * as SC from './AuthLink.styled.js';

export default function AuthLink({ children, path }) {
  const isAccount = children === 'Account';
  return (
    <SC.StyledLink to={path} $isAccount={isAccount}>
      {isAccount && (
        <svg
          width="20"
          height="20"
          fill="var(--light-color)"
          style={{ marginRight: '12px', alignContent: 'baseline' }}
        >
          <use href="/images/sprite.svg#user" />
        </svg>
      )}
      {children}
    </SC.StyledLink>
  );
}
