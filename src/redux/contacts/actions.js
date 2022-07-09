import { nanoid } from 'nanoid';
import { ADD_CONTACT, FILTER_LIST, REMOVE_CONTACT } from './action-types';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});
export const removeContact = id => ({
  type: REMOVE_CONTACT,
  payload: {
    id,
  },
});

export const filterList = filter => ({
  type: FILTER_LIST,
  payload: {
    filter,
  },
});
