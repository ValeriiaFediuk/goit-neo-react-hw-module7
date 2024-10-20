import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { fetchContacts } from './redux/contactsOps';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Book</h1>
      <ContactsForm />
      <h2 className={styles.subTitle}>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
