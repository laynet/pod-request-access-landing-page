import React, { useState } from 'react';
import validator from 'validator';
import './App.scss';
import Form from './Form';
import applePod from './assets/desktop/apple-podcast.svg';
import googlePod from './assets/desktop/google-podcasts.svg';
import spotifyPod from './assets/desktop/spotify.svg';
import pocketCastPod from './assets/desktop/pocket-casts.svg';
import logo from './assets/desktop/logo.svg';
import footerDots from './assets/desktop/bg-pattern-dots.svg';

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
      setEmailError('Oops! Please check your email!');
      setEmail('');
      setInput('');
    }
  };
  return (
    <>
      <main>
        {/* ******** MOBILE ************* */}
        <div className='mobile-container'>
          <img src={logo} className='logo' alt='' />
          <h1 className='title'>
            Publish your podcasts <span>everywhere.</span>
          </h1>
          <p className='text'>
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>
          <div className='logos-container'>
            <ul className='logos-list'>
              <li className='logos__item'>
                <img src={spotifyPod} alt='' />
              </li>
              <li className='logos__item'>
                <img src={applePod} alt='' />
              </li>
              <li className='logos__item'>
                <img src={googlePod} alt='' />
              </li>
              <li className='logos__item'>
                <img src={pocketCastPod} alt='' />
              </li>
            </ul>
          </div>
          <Form
            handleSubmit={handleSubmit}
            input={input}
            setInput={setInput}
            emailError={emailError}
          />
        </div>
        <div className='grid'>
          <header>
            <img src={logo} className='logo' alt='' />
          </header>

          <div className='card'>
            <h1 className='title'>
              Publish your podcasts <span>everywhere.</span>
            </h1>
            <p className='text'>
              Upload your audio to Pod with a single click. We’ll then
              distribute your podcast to Spotify, Apple Podcasts, Google
              Podcasts, Pocket Casts and more!
            </p>
            <Form
              handleSubmit={handleSubmit}
              input={input}
              setInput={setInput}
              emailError={emailError}
            />
            <div className='logos-container'>
              <ul className='logos-list'>
                <li className='logos__item'>
                  <img src={spotifyPod} alt='' />
                </li>
                <li className='logos__item'>
                  <img src={applePod} alt='' />
                </li>
                <li className='logos__item'>
                  <img src={googlePod} alt='' />
                </li>
                <li className='logos__item'>
                  <img src={pocketCastPod} alt='' />
                </li>
              </ul>
            </div>
          </div>
          <footer>
            <img src={footerDots} alt='' />
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
