import { getOrganizations } from '../../api/petfinder-api';
import useDataAPI from '../../utils/hooks/useDataAPI';
import { Loader } from '../Loader/Loader';
import * as SC from './FriendCard.styled';

export default function FriendCard() {
  const { data, isLoading } = useDataAPI(getOrganizations);
  console.log(data);

  return (
    <Loader isLoading={isLoading}>
      {data.map(({ id, name, phone, address, email, photos = [], hours }) => {
        const partnerPhoto =
          photos.length > 0 ? photos[0].small : '/public/images/No_Image_Available.jpg';
        const workingHover = hours.length > 0 ? hours[0].monday : '---';
        const title = (name) => name.split(' ').slice(0, 4).join(' ');

        return (
          <SC.FriendsWrapper key={id}>
            <SC.FriendTitle>{title(name)}</SC.FriendTitle>
            <SC.FriendDetails>
              <SC.FriendImg src={partnerPhoto} alt={name} width={160} />
              <SC.FriendsList>
                <SC.FriendsItem>
                  Time: <br></br>
                  {workingHover}
                </SC.FriendsItem>
                <SC.FriendsItem>
                  Address: <br></br>
                  {address?.city || 'No address available'}
                </SC.FriendsItem>
                <SC.FriendsItem>
                  Email: <br></br> {email}
                </SC.FriendsItem>
                <SC.FriendsItem>
                  Phone: <br></br>
                  {phone || 'No phone available'}
                </SC.FriendsItem>
              </SC.FriendsList>
            </SC.FriendDetails>
          </SC.FriendsWrapper>
        );
      })}
    </Loader>
  );
}
