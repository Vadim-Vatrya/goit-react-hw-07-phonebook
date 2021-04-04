import { useSelector} from 'react-redux';
import { getVisibleContacts} from '../../redux/contacts/contact-selectors';
import ContactItem from '../ContactItem';


import styles from './ContactList.module.scss';




const ContactList = () => {
    
    const contacts = useSelector(getVisibleContacts);
    
    
    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={styles.contactItem}>
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