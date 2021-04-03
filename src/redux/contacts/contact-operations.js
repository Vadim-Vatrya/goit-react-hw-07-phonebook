import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError
} from './contact-actions';


axios.gefault.baseUrl = 'http://localhost:4040';


export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
  .get('/contacts')
  .then(({data}) => dispatch(fetchContactsSuccess(data)))
  .catch(error => dispatch(fetchContactsError(error)))
}

export const addContact = (name, number) => dispatch => {
  const contact = {name, number,};
  dispatch(addContactRequest());
  axios
  .post('/contacts', contact)
  .then(({data}) => dispatch(addContactSuccess(data)))
  .catch(error => dispatch(addContactError(error)))
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
  .delete(`/contacts/${id}`)
  .then(({id}) => dispatch(deleteContactSuccess(id)))
  .catch(error => dispatch(deleteContactError(error)))
}
