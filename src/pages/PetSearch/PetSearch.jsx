import Title from '../../components/Title/Title';
import SearchForm from '../../components/SearchForm/SearchForm';
import * as SC from './PetSearch.styled';
import PetCard from '../../components/PetCard/PetCard';

export default function Search() {
  return (
    <SC.PageContainer>
      <Title>Find your favorite pet</Title>
      <SearchForm />
      <SC.PetCardWrapper>
        <PetCard> Outlet </PetCard>
      </SC.PetCardWrapper>
    </SC.PageContainer>
  );
}
