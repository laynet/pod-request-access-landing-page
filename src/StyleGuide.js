import React from 'react';
import styleGuide from './StyleGuide.scss';

const butts = () => {
  return (
    <>
      <h1 className='title'>
        Publish your podcasts <span>everywhere.</span>
      </h1>
      <p className='text'>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <form action='' id='form'>
        <label for='email'></label>
        <div className='input-container'>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email address'
            className='email-input'
          />
          <div className='btn-wrapper'>
            <button className='btn'>Request access</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default butts;
