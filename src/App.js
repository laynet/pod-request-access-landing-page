import React, { useState } from 'react';
import validator from 'validator';
import './App.scss';

function App() {
  const [email, setEmail] = useState('');
  const [input, setInput] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(input)) {
      setEmail(input);
      setInput('');
      setEmailError('');
    } else {
      setEmailError('Oops! Please check your email');
      setEmail('');
      setInput('');
    }
    console.log(input);
    console.log(email);
    console.log('buttfarts');
  };
  return (
    <>
      <h1>butts</h1>
      <form className='email-sbumit' onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          placeholder='Email address'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' type='submit'>
          Request Access
        </button>
        {emailError}
      </form>
    </>
  );
}

export default App;
