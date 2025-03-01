import styled from 'styled-components';

export const PetCardItem = styled.li`
  display: flex;
  width: 280px;
  flex-direction: column;
  background-color: var(--light-color);
  border-radius: 30px;
  box-shadow: var(--box-shadow);
`;

export const PetImgCard = styled.img`
  height: 280px;
  border-radius: 30px 30px 0 0;
  object-fit: cover;
`;

export const PetDescription = styled.div`
  padding: 20px;
`;

export const PetTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const PetList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: last baseline;
  margin-bottom: 20px;
`;

export const PetListItems = styled.li`
  padding-bottom: 8px;
`;

export const PetCardButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 248px;
  height: 38px;
  padding: 8px 0;
  font-size: 16px;
  color: var(--primary-color);
  cursor: pointer;
  border-radius: 35px;
  border: 1px solid var(--primary-color);
  background-color: var(--light-color);
`;
