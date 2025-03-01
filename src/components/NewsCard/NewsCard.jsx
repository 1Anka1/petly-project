import useDataAPI from '../../utils/hooks/useDataAPI';
import { getNews } from '../../api/news-api';
import * as SC from './NewsCard.styled';
import { Loader } from '../Loader/Loader';

export default function NewsCard() {
  const { data, isLoading } = useDataAPI(getNews);

  return (
    <Loader isLoading={isLoading}>
      {data.map(({ webTitle, id, webPublicationDate, webUrl, fields: { thumbnail } }) => (
        <SC.CardDetails key={id}>
          <SC.ImgCard src={`${thumbnail}`} />
          <SC.CardTitle>{webTitle}</SC.CardTitle>
          <SC.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequuntur ea expedita
            nostrum laudantium reprehenderit adipisci possimus.
          </SC.Paragraph>
          <SC.DescriptionWrapper>
            <SC.Date>{new Date(webPublicationDate).toLocaleDateString()}</SC.Date>
            <SC.ReadMoreLink href={webUrl} target="_blank">
              Read more
            </SC.ReadMoreLink>
          </SC.DescriptionWrapper>
        </SC.CardDetails>
      ))}
    </Loader>
  );
}
