import { Container } from '../../components/Layout/Layout.styled';
import * as SC from './Home.styled';

export default function Home() {
  return (
    <SC.HomeSection>
      <Container>
        <SC.HomeTitle>Take good care of your small pets</SC.HomeTitle>
      </Container>
      <>
        <SC.HomeFrame src="/images/Home-frame.png" />
        <SC.HomeHeart src="/images/Home-heart.png" />
        <SC.HomePortait src="/images/Home-portrait.png" />
      </>
    </SC.HomeSection>
  );
}
