import Navigation from '../Navigation/Navigation';
import * as SC from './Header';
import Container from '../Layout/Layout.styled';

export default function Header() {
  return (
    <SC.Header>
      <Container>
        <Navigation />
      </Container>
    </SC.Header>
  );
}
