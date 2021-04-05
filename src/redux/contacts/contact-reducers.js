import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import * as contactsActions from './contact-actions';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter
} from './contact-actions';
// import { fetchContacts, addContact, deleteContact } from './contact-operations';

// const initialState = [];
const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
         state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload.trim(),
});

const LoadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});




// const itemsReducer = createReducer([], {
//     [fetchContacts.fulfilled]: (_, { payload }) => payload,
//     [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
//     [deleteContact.fulfilled]: (state, { payload }) =>
//         state.filter(({ id }) => id !== payload),
// });


// const filterReducer = createReducer('', {
//     [changeFilter]: (_, { payload }) => payload,
// });

// const LoadingReducer = createReducer(false, {
//     [fetchContacts.pending]: () => true,
//     [fetchContacts.fulfilled]: () => false,
//     [fetchContacts.rejected]: () => false,
//     [addContact.pending]: () => true,
//     [addContact.fulfilled]: () => false,
//     [addContact.rejected]: () => false,
//     [deleteContact.pending]: () => true,
//     [deleteContact.fulfilled]: () => false,
//     [deleteContact.rejected]: () => false,
// })


const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: LoadingReducer,
});

export default contactsReducer;