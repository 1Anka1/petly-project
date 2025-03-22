import FriendCard from '../../components/FriendCard/FriendCard';
import { Section, Container, CardWrapper } from '../../components/Layout/Layout.styled';
import Title from '../../components/Title/Title';
// import * as SC from './Friends.styled';

export default function Friends() {
  return (
    <Section>
      <Container>
        <Title>Our Friends</Title>
        <CardWrapper>
          <FriendCard>Outlet</FriendCard>
        </CardWrapper>
      </Container>
    </Section>
  );
}
