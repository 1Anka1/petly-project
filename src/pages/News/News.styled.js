import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  border: 1px solid black;

  &::before {
    content: '';
    position: absolute;
    top: -22px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(90deg, #ff634e, #ffdf48);
  }
`;
