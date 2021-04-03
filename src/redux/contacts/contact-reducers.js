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
    [changeFilter]: (_, { payload }) => payload,
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
})



const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: LoadingReducer,
});

export default contactsReducer;