import React, { useState } from 'react';
import ContactForm from './contact-form';
import ContactList from './contact-list';
import SearchBar from './SearchBar';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactForm addContact={addContact} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;