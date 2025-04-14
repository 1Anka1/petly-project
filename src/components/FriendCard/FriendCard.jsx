import { getOrganizations } from '../../api/petfinder-api';
import useDataAPI from '../../utils/hooks/useDataAPI';
import { Loader } from '../Loader/Loader';
import * as SC from './FriendCard.styled';

export default function FriendCard() {
  const { data, isLoading } = useDataAPI(getOrganizations);

  return (
    <Loader isLoading={isLoading}>
      {data.map(({ id, name, phone, address, email, photos = [] }) => {
        const partnerPhoto = photos.length > 0 ? photos[0].small : '/images/No_Image_Available.jpg';
        const title = (name) => name.split(' ').slice(0, 4).join(' ');

        return (
          <SC.FriendsWrapper key={id}>
            <SC.FriendTitle>{title(name)}</SC.FriendTitle>
            <SC.FriendDetails>
              <SC.FriendImg src={partnerPhoto} alt={name} />
              <SC.FriendsList>
                <li>
                  Address:
                  <SC.Underline> {address?.city || 'No address available'}</SC.Underline>
                </li>
                <li>
                  Email: <br></br> {email}
                </li>
                <li>
                  Phone: <br></br>
                  {phone || 'No phone available'}
                </li>
              </SC.FriendsList>
            </SC.FriendDetails>
          </SC.FriendsWrapper>
        );
      })}
    </Loader>
  );
}
