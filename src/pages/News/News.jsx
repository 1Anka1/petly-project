import { getNews } from '../../api/news-api';
import * as SC from './News.styled';
import { useState, useEffect, Fragment } from 'react';
import Title from '../../components/Title/Title';
import SearchFrom from '../../components/SearchForm/SearchForm';

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getNews();
      setNews(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Title>News</Title>
      <SearchFrom />
      <SC.NewsContainer>
        {news.map(({ webTitle, id, fields, webPublicationDate, webUrl }) => (
          <Fragment key={id}>
            <SC.CardDetails>
              <SC.ImgCard src={`${fields.thumbnail}`} />
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
          </Fragment>
        ))}
      </SC.NewsContainer>
    </Fragment>
  );
}
