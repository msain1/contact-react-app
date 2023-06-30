import React from 'react';
import './contact-list.css';

const ContactList = ({ contacts }) => {
  return (
    <table className='contactTable'>
    <thead>
        <tr>
        <th><i className="fas fa-user"></i>Name</th>
        <th><i className="fas fa-phone"></i>Phone</th>
        <th><i className="fas fa-envelope"></i>Email</th>
        </tr>
    </thead>
    <tbody>
        {contacts.map((contact, index) => (
        <tr key={index}>
            <td>{contact.name}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
        </tr>
        ))}
    </tbody>
    </table>
  );
};

export default ContactList;
