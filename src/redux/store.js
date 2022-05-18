import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsSlice } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

setupListeners(store.dispatch);

export const { filterContacts } = contactsSlice.actions;
