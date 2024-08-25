import { createReducer } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './actions';
import { addContact, deleteContact, setFilter } from './actions';

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilterState = '';

export const contactsReducer = createReducer(initialContactsState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

export const filterReducer = createReducer(initialFilterState, {
  [setFilter]: (state, action) => action.payload,
});
