
import css from '../contactList /contactList.module.css';
import PropTypes from 'prop-types';


const ContactList = ({ contacts, onDeleteContact }) => {

    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contactListItem}>
                   <div> {contact.name}: {contact.number}</div>
                    <button type="button" className={css.deleteBtn} onClick={() => onDeleteContact(contact.id)} >Delete</button>
                </li>
            )) }
        </ul>
    )

};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

