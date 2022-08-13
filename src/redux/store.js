import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter';
import { itemsReducer } from './contacts';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: itemsReducer,
  },
});
