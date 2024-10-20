import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from './filtersSlice';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('contacts/fetchContacts/fulfilled', (state, action) => {
        state.items = action.payload;
      })
      .addCase('contacts/addContact/fulfilled', (state, action) => {
        state.items.push(action.payload);
      })
      .addCase('contacts/deleteContact/fulfilled', (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      });
  },
});

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;
