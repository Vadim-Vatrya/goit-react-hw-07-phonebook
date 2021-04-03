import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contact-actions';
// import {ADD, DELETE, CHANGE_FILTER} from './contact-types'

// const initialContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];


const itemsReducer = createReducer([], {
    [contactsActions.addContact]: (state, { payload }) => [payload, ...state],
    [contactsActions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

// const items = (state=contacts, {type, payload}) => {

//   switch  (type) {
//     case types.ADD:
//     return [...state, payload];

//     case types.DELETE:
//     return state.filter(({ id }) => id !== payload);

//     default:
//        return state;
//   }
// };

const filterReducer = createReducer('', {
    [contactsActions.changeFilter]: (_, { payload }) => payload,
});

// const filter = (state ='', {type, payload}) => {
//   switch (type) {
//           case types.CHANGE_FILTER:
//           return payload.trim();
      
//           default:
//           return state;
//          }
//         }


const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export default contactsReducer;