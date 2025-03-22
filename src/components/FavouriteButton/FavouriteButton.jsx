/* eslint-disable react/prop-types */
import * as SC from './FavouriteButton.styled';

export function FavouriteButton({ setFavourite, id, favourite }) {
  const handleClick = (id) => {
    if (favourite.includes(id)) {
      const filteredFavourite = favourite.filter((item) => item !== id);
      setFavourite(filteredFavourite);
    } else {
      setFavourite((prev) => [...prev, id]);
    }
  };
  return (
    <SC.ButtonHeart onClick={() => handleClick(id)}>
      {favourite.includes(id) ? (
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
