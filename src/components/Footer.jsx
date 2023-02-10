import React from 'react'
import GitHub from '../static/img/icon-github.svg'
import LinkedIn from '../static/img/icon-linkedin.svg'
import Twitter from '../static/img/icon-twitter.svg';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-name'>danbaker</div>
        <div className='footer-socials'>
          <img src={GitHub} alt='github' />
          <img src={LinkedIn} alt='linkedin' />
          <img src={Twitter} alt='twitter' />
        </div>
      </div>
    </div>
  )
}
