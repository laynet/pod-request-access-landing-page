import React from 'react';
import './App.scss';

const Form = ({ input, handleSubmit, setInput, emailError }) => {
  return (
    <form onSubmit={handleSubmit} id='form'>
      <label for='email'></label>
      <div className='input-container'>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Email address'
          value={input}
          className='email-input'
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='btn-wrapper'>
          <button className='btn' type='submit'>
            Request access
          </button>
        </div>
      </div>
      <div className='email-error'>
        <p>{emailError}</p>
      </div>
    </form>
  );
};

export default Form;
