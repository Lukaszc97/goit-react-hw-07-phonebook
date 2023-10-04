import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsAsync, deleteContactAsync, createContactAsync } from './operations';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createContactAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createContactAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(createContactAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


const filterReducer = createSlice({
  name: 'filter',
  initialState: '', 
  reducers: {
    setFilter(state, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const { setFilter } = contactsReducer.actions;
export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filter;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export { createContactAsync };

export default contactsReducer.reducer;


export { filterReducer };
