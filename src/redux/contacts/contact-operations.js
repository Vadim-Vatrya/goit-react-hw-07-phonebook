import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter
} from './contact-actions';


axios.gefault.baseUrl = 'http://localhost:4040';




const addContacts = (name, number) => dispatch => {
  const contact = {name, number,};
  dispatch(addContactRequest());
  axios
  .post('/contacts', contact)
  .then(({data}) => dispatch(addContactSuccess(data)))
  .catch(error => dispatch(addContactError(error)))
};

const
