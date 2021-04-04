import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts, getLoading } from '../../redux/contacts/contact-selectors';
import ContactItem from '../ContactItem';
import {useEffect} from 'react';
import {fetchContacts} from '../../redux/contacts/contact-operations';


import Loader from '../Loader';
import styles from './ContactList.module.scss';




const ContactList = () => {
    
    const contacts = useSelector(getVisibleContacts);
    const loading = useSelector(getLoading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    return (
        <>
        {loading && <Loader />}

        {!loading && contacts && contacts.length > 0 
        ? (<ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={styles.listItem}>
                    <ContactItem name={name} number={number} id={id} />
                </li>
            ))}
        </ul>)
        : null}
        </>


        
    );
};

export default ContactList;




// export default connect(mapStateToProps)(ContactList);

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: getVisibleContacts(items, filter),
// });