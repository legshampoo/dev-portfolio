import React from 'react'
import ProfileDesktop from '../static/img/image-profile-desktop.webp'
import Header from './Header.jsx'

export default function AboveFold() {
  return (
    <div className='atf-main-container'>
      <Header />
      <div className='atf-content-container'>
        <div className='atf-text-container'>
          <div className='atf-headline'>
            <h1>Nice to meet you!<br></br>
                I'm <u className='atf-name-underline'>Dan Bakerz.</u>
            </h1>
          </div>
          <div className='atf-paragraph'>
            Based in Los Angeles, I'm a front-end developer
            passionate about building accessible web apps
            that users love.
          </div>
          <div className='cta'>
            CONTACT ME
          </div>
        </div>
        <div className='img-container'>
          <img className='profile-img-desktop' src={ProfileDesktop} alt="profile" />
        </div>
      </div>
    </div>
  )
}
