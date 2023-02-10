import { useState } from 'react';
import React from 'react'
import Divider from './Divider'
// import { useForm } from 'react-hook-form';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  

  const isValidEmail = (email) => {
    return (
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    )
  }

  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    setIsValid(isValid);
    setEmail(email);
    
    if(email.length > 0 && !isValid){
      console.log('isValid: ', isValid)
      setShowEmailError(true);
    } else {
      console.log('email empty')
      setShowEmailError(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(message);
    if(isValid && email.length > 0){
      console.log('SEND IT BRO');
      setName('')
      setEmail('')
      setMessage('')
      // reset()
    } else {
      console.log('invalid');
    }
  }

  return (
    <div className='contact-section-background'>
      <div className='contact-container'>
        <div className='contact-text'>
          <div className='contact-title'>Contact</div>
          <div className='contact-paragraph'>
            I would love to hear about your project and how I could help.  Please fill in the form, and I'll get back to you as soon as possible.
          </div>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <input
              className='form-input' 
              type='text' 
              placeholder='NAME'
              value={name}
              data-lpignore='true'
              onChange={(e) => setName(e.target.value)}
              />
            <input
              // className='form-input' 
              className={ showEmailError ? 'error' : 'form-input'}
              type='search' 
              placeholder='EMAIL'
              value={email}
              autoComplete='off'
              data-lpignore='true'
              // onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => handleEmailValidation(e.target.value)}
              />
            <textarea 
              className='form-input-textarea' 
              type='textarea' 
              placeholder='MESSAGE' 
              rows='5' 
              cols='30'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
            <input 
              type='submit' 
              value='SEND MESSAGE'
              className='btn-submit'/>
          </form>
        </div>
      </div>
      <hr className='contact-divider' />
    </div>
  )
}
