import React from 'react'
import GitHub from '../static/img/icon-github.svg'
import LinkedIn from '../static/img/icon-linkedin.svg'
import Twitter from '../static/img/icon-twitter.svg';
import Instagram from '../static/img/icon-instagram.svg';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-name'>danbaker</div>
        <div className='footer-socials'>
        <a href='https://github.com/legshampoo' target='_blank'>
          <img src={GitHub} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/dan-baker-4703a189/' target='_blank'>
          <img src={LinkedIn} alt='linkedin' />
        </a>
        <a href='https://www.instagram.com/dans.party/?hl=en' target='_blank'>
          <img src={Instagram} alt='instagram' />
        </a>
        </div>
      </div>
    </div>
  )
}
