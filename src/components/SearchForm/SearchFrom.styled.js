import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  margin-bottom: 82px;
  align-items: center;
  position: relative;
  width: 610px;
  height: 45px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  outline: none;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 50px;
  font: 500 20px/1.5 var(--logo-font);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--light-color);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    fill: var(--light-color);
    background-color: var(--primary-color);
    transition: background-color 450ms var(--timing-function), fill 450ms var(--timing-function);
  }
`;
