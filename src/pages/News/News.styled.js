import styled from 'styled-components';
import Container from '../../components/Layout/Layout.styled';

export const NewsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

export const CardDetails = styled.div`
  position: relative;
  width: 345px;
  padding-bottom: 60px;

  &::before {
    content: '';
    position: absolute;

    top: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: linear-gradient(90deg, #ff634e, #ffdf48);
  }
`;

export const ImgCard = styled.img`
  border-radius: 5px;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  margin: 16px 0 50px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Description = styled.p`
  font-size: 16px;
`;

export const Date = styled.p`
  font-size: 16px;
  opacity: 60%;
`;

export const ReadMoreLink = styled.a`
  font-size: 16px;
  color: var(--primary-color);
  text-decoration: underline;
  text-underline-offset: 2px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;
