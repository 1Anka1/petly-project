import { useState } from 'react';
import { getAnimals } from '../../api/petfinder-api';
import useDataAPI from '../../utils/hooks/useDataAPI';
import { Loader } from '../Loader/Loader';
import * as SC from './PetCard.styled';
import Modal from '../Modal/Modal';
import { FavouriteButton } from '../FavouriteButton/FavouriteButton';

export default function PetCard() {
  const { data, isLoading } = useDataAPI(getAnimals);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Loader isLoading={isLoading}>
      {data.map(
        ({ name, gender, breeds: { primary }, id, primary_photo_cropped, age, species }) => (
          <SC.PetCardItem key={id}>
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
            <SC.WrapperDescription>
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
              <FavouriteButton id={id} />
              <SC.PetCardButton onClick={() => setIsModalOpen(true)}>Learn more</SC.PetCardButton>
            </SC.WrapperDescription>
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
          </SC.PetCardItem>
        ),
      )}
    </Loader>
  );
}
