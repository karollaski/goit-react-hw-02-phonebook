import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <ContactList contacts /> */}
      </>
    );
  }
}

export default App;
