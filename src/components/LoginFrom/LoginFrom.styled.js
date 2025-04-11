import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const Form = styled.form`
  text-align: center;
  background-color: var(--light-color);
  padding: 60px 80px;
  border-radius: 40px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 40px;
  width: 600px;
`;

export const Input = styled.input`
  border: 1px solid var(--primary-color);
  background-color: var(--background-color);
  opacity: 0.6;
  border-radius: 40px;
  outline: none;
  padding: 14px 32px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  border-radius: 40px;
  padding: 14px;
  font-size: 20px;
  cursor: pointer;
  transition: color 250ms var(--timing-function), background-color 250ms var(--timing-function);

  &:hover {
    color: var(--primary-color);
    background-color: var(--background-color);
  }
`;

export const FormText = styled.p`
  font-size: 13px;
  color: var(--primary-text-color);
  letter-spacing: 1px;
  opacity: 0.6;
`;

export const Register = styled(Link)`
  color: var(--link-color);
  text-decoration: underline;
`;
