import { Container } from '../Layout/Layout.styled';
import Navigation from '../Navigation/Navigation';
import * as SC from './Header.styled';

export default function Header() {
  return (
    <SC.Header>
      <Container>
        <Navigation />
      </Container>
    </SC.Header>
  );
}
