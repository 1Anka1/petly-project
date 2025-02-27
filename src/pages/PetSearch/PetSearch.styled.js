import styled from 'styled-components';
import Container from '../../components/Layout/Layout.styled';

export const PageContainer = styled(Container)`
  padding-top: 60px;
`;

export const PetCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;
