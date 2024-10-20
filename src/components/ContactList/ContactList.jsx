import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
