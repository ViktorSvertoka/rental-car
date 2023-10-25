import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import favoritesReducer from './slice';
import { carsApi } from './operations';

const reducers = combineReducers({
  [carsApi.reducerPath]: carsApi.reducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'favorites',
  version: 1,
  storage,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carsApi.middleware),
});

export let persistor = persistStore(store);
