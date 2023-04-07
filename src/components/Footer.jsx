import React from 'react'
import GitHub from '../static/img/icon-github.svg'
import LinkedIn from '../static/img/icon-linkedin.svg'
import Twitter from '../static/img/icon-twitter.svg';
import Instagram from '../static/img/icon-instagram.svg';
import Document from '../static/img/doc.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-name'>danbaker</div>
        <div className='footer-socials'>
        <a href='https://github.com/legshampoo' target='_blank'>
          <img src={GitHub} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/danbakerz' target='_blank'>
          <img src={LinkedIn} alt='linkedin' />
        </a>
        <a href='https://www.instagram.com/dans.party/?hl=en' target='_blank'>
          <img src={Instagram} alt='instagram' />
        </a>
        <a 
          href='/resume.pdf' 
          target='_blank'>
          <img src={Document} alt='resume' />
        </a>
        </div>
      </div>
    </div>
  )
}
