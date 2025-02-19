import styled from 'styled-components';

export const HomeTitle = styled.h1`
  max-width: 650px;
  width: 100%;
  margin-left: 16px;
  font: 700 68px/1.5 var(--primary-font);
`;

export const ImgWrapper = styled.div`
  height: calc(100vh - 382px);
  position: relative;
  width: 100%;
`;

export const HomeFrame = styled.img`
  position: absolute;
  right: -18px;
  bottom: 0;
`;

export const HomeHeart = styled.img`
  position: absolute;
  right: 45%;
  top: -60%;
`;

export const HomePortait = styled.img`
  position: absolute;
  bottom: 0;
  right: 10%;
`;

export const Section = styled.section`
  padding-top: 90px;
`;
