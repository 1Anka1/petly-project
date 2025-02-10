import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const StyleLink = styled(NavLink)`
  color: green;

  &.active {
    color: red;
  }
`;
