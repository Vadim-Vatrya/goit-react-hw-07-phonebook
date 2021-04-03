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


const initialState = [];

const itemsReducer = createReducer(initialState, {
    [fetchContactsSuccess]: (_, action) => action.payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});


const filterReducer = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});



const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export default contactsReducer;