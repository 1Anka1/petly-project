/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import * as SC from './FavouriteButton.styled';
import { getFavourites } from '../../redux/selectors';
import { addToFavourite, deleteFromFavourite } from '../../redux/favouritesSlice/favouritesSlice';

export function FavouriteButton({ id }) {
  const favourites = useSelector(getFavourites);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (favourites.items.includes(id)) {
      dispatch(deleteFromFavourite(id));
    } else {
      dispatch(addToFavourite(id));
    }
  };

  return (
    <SC.ButtonHeart onClick={() => handleClick(id)}>
      {favourites.items.includes(id) ? (
        <svg width="28" height="28">
          <use href="/images/sprite.svg#favourite"></use>
        </svg>
      ) : (
        <svg width="28" height="28">
          <use href="/images/sprite.svg#unfavourite"></use>
        </svg>
      )}
    </SC.ButtonHeart>
  );
}
