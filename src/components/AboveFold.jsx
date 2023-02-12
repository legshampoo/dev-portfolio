import React from 'react'
import ProfileDesktop from '../static/img/image-profile-4-desktop.webp'
import Header from './Header.jsx'

export default function AboveFold({ formRef }) {

  const onClick = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <div className='atf-main-container'>
      <Header />
      <div className='atf-content-container'>
        <div className='atf-text-container'>
          <div className='atf-headline'>
            <h1>Nice to meet you!<br></br>
                I'm <u className='atf-name-underline'>Dan Baker.</u>
            </h1>
          </div>
          <div className='atf-paragraph'>
            Based in Los Angeles, I'm a full stack developer
            passionate about building accessible web apps
            that users love.
          </div>
          <div 
            className='cta'
            onClick={ () => onClick() }
            >
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
