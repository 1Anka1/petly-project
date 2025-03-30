import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: { items: [] },
  reducers: {
    addToFavourite(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteFromFavourite(state, { payload }) {
      state.items = state.items.filter((item) => item !== payload);
    },
  },
});

const persistConfig = {
  key: 'favourites',
  storage,
  whitelist: ['items'],
};

export const favouritesReducer = persistReducer(persistConfig, favouritesSlice.reducer);
export const { addToFavourite, deleteFromFavourite } = favouritesSlice.actions;
