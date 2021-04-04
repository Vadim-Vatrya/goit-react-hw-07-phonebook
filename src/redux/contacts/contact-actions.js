import { createAction } from '@reduxjs/toolkit';


export const fetchContactsRequest = createAction('contacts/fetchContactRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactsError = createAction('contacts/fetchContactRequest');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactRequest');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactRequest');

export const changeFilter = createAction('contacts/changeFilter');
