import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 28px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 40px;
  border: 1px solid var(--primary-color);
  background-color: var(--light-color);

  &:hover {
    color: var(--light-color);
    background: var(--primary-color);
    transition: color 250ms var(--timing-function), background-color 250ms var(--timing-function);
  }
`;
