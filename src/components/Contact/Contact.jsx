import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    console.log("Deleting contact with id:", contact.id);
    onDelete(contact.id); 
  };

  return (
    <div className={styles.item}>
      <span className={styles.text}>{contact.name}: {contact.number}</span>
      <button className={styles.button} onClick={handleDelete}>Видалити</button>
    </div>
  );
};

export default Contact;
