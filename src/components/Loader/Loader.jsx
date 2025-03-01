import BeatLoader from 'react-spinners/BeatLoader';

// eslint-disable-next-line react/prop-types
export const Loader = ({ isLoading, children }) => {
  return isLoading ? <BeatLoader color={'#f59256'} /> : children;
};
