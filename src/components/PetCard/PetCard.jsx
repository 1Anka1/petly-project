import { getAnimals } from '../../api/animals-api';
import useDataAPI from '../../utils/hooks/useDataAPI';
import * as SC from './PetCard.styled';

export default function PetCard() {
  const data = useDataAPI(getAnimals);
  console.log(data);

  return (
    <>
      {data.map(
        ({ name, gender, breeds: { primary }, id, primary_photo_cropped, age, species, url }) => (
          <SC.PetCardWrapper key={id}>
            <SC.PetImgCard
              key={id}
              src={
                primary_photo_cropped
                  ? primary_photo_cropped.small
                  : '/images/No_Image_Available.jpg'
              }
              alt={name}
              width={300}
              height={300}
            />
            <SC.PetDescription>
              <SC.PetTitle>{`Cute ${species.toLowerCase()} looking for a home`}</SC.PetTitle>
              <SC.PetList>
                <SC.PetListItems>
                  Breed: <span>{primary}</span>
                </SC.PetListItems>
                <SC.PetListItems>
                  Gender: <span>{gender}</span>
                </SC.PetListItems>
                <SC.PetListItems>
                  Age: <span>{age}</span>
                </SC.PetListItems>
              </SC.PetList>
              <SC.PetCardButtone>
                <a href={url} target="_blank">
                  Learn more
                </a>
              </SC.PetCardButtone>
            </SC.PetDescription>
          </SC.PetCardWrapper>
        ),
      )}
    </>
  );
}
