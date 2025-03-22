import styled from 'styled-components';

export const ButtonHeart = styled.button`
  position: absolute;
  display: flex;
  top: 12px;
  right: 12px;
  padding: 8px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.6);

  &:hover {
    transform: scale(1.1);
    transition: transform 250ms var(--timing-function);
  }
`;
