import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const MessageForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/message/send',
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      toast.success(response.data.message); // Ensure response.data exists
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); // Ensure error.response.data exists
      } else {
        toast.error('An unexpected error occurred');
      }
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className='container form-component message-form'>
      <h2 style={{ textAlign: 'center' }}>Send us a message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='number'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
