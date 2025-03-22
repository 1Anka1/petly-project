import Title from '../../components/Title/Title';
import SearchForm from '../../components/SearchForm/SearchForm';
import PetCard from '../../components/PetCard/PetCard';
import { Section, CardWrapper, Container } from '../../components/Layout/Layout.styled';

export default function Search() {
  return (
    <Section>
      <Title>Find your favorite pet</Title>
      <SearchForm />
      <Container>
        <CardWrapper>
          <PetCard> Outlet </PetCard>
        </CardWrapper>
      </Container>
    </Section>
  );
}
