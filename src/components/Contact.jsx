import { useState, forwardRef } from 'react';
import React from 'react'
import Divider from './Divider'

export default function Contact({ formRef}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);
  
  const isValidEmail = (email) => {
    return (
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    )
  }

  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    
    if(email.length > 0 && !isValid){
      setShowEmailWarning(true);
      setShowEmailError(false);
    } else {
      setShowEmailWarning(false);
      setShowEmailError(false);
    }
    
    setEmail(email);
    setEmailIsValid(isValid);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!emailIsValid || email.length === 0){
      setShowEmailError(true);
      return
    } 

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'message': message
      })
    }

    // fetch('http://localhost:3000/api/email', options)
    fetch('https://email-sender-teal.vercel.app/api/email', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const { message } = data;
        if(message === 'success'){
          setName('');
          setEmail('');
          setMessage('');
          alert('Email sent successfully')
        } else {
          alert('Email failed to send')
        }
      })
  }

  return (
    <div className='contact-section-background'>
      <div className='contact-container' ref={formRef}>
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
              className={ showEmailWarning ? 'form-warning' : 'form-input' }
              type='search' 
              placeholder='EMAIL'
              value={email}
              autoComplete='off'
              data-lpignore='true'
              onChange={(e) => handleEmailValidation(e.target.value)}
              />
            { showEmailError ? <div className='form-error'>Please enter a valid email!</div> : <></>}
            <textarea 
              className='form-input-textarea' 
              type='textarea' 
              placeholder='MESSAGE' 
              rows='5' 
              cols='30'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
            { showMessageError ? <div className='form-error'>Please enter a message!</div> : <></>}
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
