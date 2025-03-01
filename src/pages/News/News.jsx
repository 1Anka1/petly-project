import * as SC from './News.styled';
import Title from '../../components/Title/Title';
import SearchFrom from '../../components/SearchForm/SearchForm';
import useDataAPI from '../../utils/hooks/useDataAPI';
import { getNews } from '../../api/news-api';

export default function News() {
  const { data } = useDataAPI(getNews);

  return (
    <SC.PageContainer>
      <Title>News</Title>
      <SearchFrom />
      <SC.NewsContainer>
        {data.map(({ webTitle, id, webPublicationDate, webUrl, fields: { thumbnail } }) => (
          <li key={id}>
            <SC.CardDetails>
              <SC.ImgCard src={`${thumbnail}`} />
              <SC.CardTitle>{webTitle}</SC.CardTitle>
              <SC.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequuntur ea
                expedita nostrum laudantium reprehenderit adipisci possimus illum ratione quo amet
                cupiditate sequi corrupti aperiam exercitationem ad, voluptatum rem nulla?
              </SC.Description>
              <SC.DescriptionWrapper>
                <SC.Date>{new Date(webPublicationDate).toLocaleDateString()}</SC.Date>
                <SC.ReadMoreLink href={webUrl} target="_blank">
                  Read more
                </SC.ReadMoreLink>
              </SC.DescriptionWrapper>
            </SC.CardDetails>
          </li>
        ))}
      </SC.NewsContainer>
    </SC.PageContainer>
  );
}

// винести окремі компоненти li and ul. => components: list / item
