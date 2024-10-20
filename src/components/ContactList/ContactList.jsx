import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
