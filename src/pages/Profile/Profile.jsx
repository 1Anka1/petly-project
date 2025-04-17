import { Section, Container } from '../../components/Layout/Layout.styled';
import UserLogOutRedirtect from '../../utils/hooks/UserLogOutRedirtect';

export default function Profile() {
  UserLogOutRedirtect();
  return (
    <Section>
      <Container>
        <h1>Hello</h1>
      </Container>
    </Section>
  );
}
