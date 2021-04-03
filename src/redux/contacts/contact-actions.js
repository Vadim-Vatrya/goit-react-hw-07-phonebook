import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactRequest');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactRequest');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactRequest');

export const changeFilter = createAction('contacts/changeFilter');


// export const addContact = createAction('contacts/add', (name, number) => ({
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     },
// }));

// export const   addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
// }
// });

// export const deleteContact = createAction('contacts/delete');

// export const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

// export const changeFilter = createAction('contacts/changeFilter');

// export const changeFilter = value => ({
//   type: 'CHANGE_FILTER',
//   payload: value,
// });


// const contactsActions = { addContact, deleteContact, changeFilter };
// export default contactsActions;