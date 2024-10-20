import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://67140b7b690bf212c7608b32.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await axios.post(API_URL, newContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await axios.delete(`${API_URL}/${contactId}`);
  return contactId;
});
