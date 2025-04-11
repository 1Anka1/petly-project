import * as SC from './ErrorMessage.styled.js';

// eslint-disable-next-line react/prop-types
export default function ErrorMessage({ children }) {
  return <SC.Error>{children}</SC.Error>;
}
