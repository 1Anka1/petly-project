import BeatLoader from 'react-spinners/BeatLoader';

export const AppLoader = () => {
  return (
    <BeatLoader
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 200px)',
      }}
      color={'#f59256'}
    />
  );
};
