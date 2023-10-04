import { configureStore } from '@reduxjs/toolkit';
import  contactsReducer  from './SliceReducer';
import { filterReducer } from './FilterSlice';

export const store = configureStore({

  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

