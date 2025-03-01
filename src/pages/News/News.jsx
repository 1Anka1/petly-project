import Title from '../../components/Title/Title';
import SearchFrom from '../../components/SearchForm/SearchForm';
import NewsCard from '../../components/NewsCard/NewsCard';
import { Container, Section, CardWrapper } from '../../components/Layout/Layout.styled';

export default function News() {
  return (
    <Section>
      <Title>News</Title>
      <Container>
        <SearchFrom />
        <CardWrapper>
          <NewsCard>Outlet</NewsCard>
        </CardWrapper>
      </Container>
    </Section>
  );
}
