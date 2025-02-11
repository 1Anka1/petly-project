import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  padding: 10px 28px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 35px;
  border: 1px solid var(--primary-color);
  background-color: var(--light-color);

  &:hover {
    color: var(--light-color);
    background: var(--primary-color);
    transition: color 250ms var(--timing-function), background-color 250ms var(--timing-function);
  }
`;
