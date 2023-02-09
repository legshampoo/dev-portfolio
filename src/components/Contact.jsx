import React from 'react'
import Divider from './Divider'

export default function Contact() {
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
          <form>
            <input
              className='form-input' 
              type='text' 
              placeholder='NAME'/>
            <input
              className='form-input' 
              type='text' 
              placeholder='EMAIL'/>
            <textarea className='form-input-textarea' type='textarea' placeholder='MESSAGE' rows='5' cols='30'></textarea>
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
