import React, { useState } from 'react';
import './contact-form.css'

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || phoneNumber.trim() === '' || email.trim() === '') {
      return;
    }
    addContact({ name, phoneNumber, email });
    setName('');
    setPhoneNumber('');
    setEmail('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit"><i class='fas fa-plus'></i>Add</button>
    </form>
  );
};

export default ContactForm;