import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export const userSlice = createSlice({
  name: 'user',
  initialState: { email: '', password: 0, isLogged: false },
  reducers: {
    logIn(state, { payload }) {
      state.email = payload.email;
      state.password = Number(payload.password);
      state.isLogged = true;
    },
    logOut(state) {
      state.email = '';
      state.password = 0;
      state.isLogged = false;
    },
  },
});

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
export const { logIn, logOut } = userSlice.actions;
