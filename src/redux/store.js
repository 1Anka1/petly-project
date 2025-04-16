import { configureStore } from '@reduxjs/toolkit';
import { favouritesReducer } from './favouritesSlice/favouritesSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { userReducer } from './userSlice/userSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
