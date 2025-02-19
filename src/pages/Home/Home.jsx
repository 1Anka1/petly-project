import * as SC from './Home.styled';

export default function Home() {
  return (
    <SC.Section>
      <SC.HomeTitle>Take good care of your small pets</SC.HomeTitle>
      <SC.ImgWrapper>
        <SC.HomeFrame src="/images/Home-frame.png" />
        <SC.HomeHeart src="/images/Home-heart.png" />
        <SC.HomePortait src="/images/Home-portrait.png" />
      </SC.ImgWrapper>
    </SC.Section>
  );
}
