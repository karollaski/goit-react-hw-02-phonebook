import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name + ' : ' + contact.number}</li>
      ))}
    </ul>
  );
};

export default ContactList;
