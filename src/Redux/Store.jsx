
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './sliceReducer';
import  filterReducer  from './filterReducer';
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

