import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts, getLoading } from '../../redux/contacts/contact-selectors';
import ContactItem from '../ContactItem';
import {useEffect} from 'react';
import {fetchContacts} from '../../redux/contacts/contact-operations';
// import { connect } from 'react-redux';

import styles from './ContactList.module.scss';




const ContactList = () => {
    
    const contacts = useSelector(getVisibleContacts);
    const loading = useSelector(getLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    return (
        <ul className={styles.list}>
            {contacts.length === 0 && <p>'No contacts'</p>}

            {loading && <p>Loading...</p>}
            
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={styles.listItem}>
                    <ContactItem name={name} number={number} id={id} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;




// export default connect(mapStateToProps)(ContactList);

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: getVisibleContacts(items, filter),
// });