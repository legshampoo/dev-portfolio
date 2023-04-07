import GitHub from '../static/img/icon-github.svg'
import LinkedIn from '../static/img/icon-linkedin.svg'
import Twitter from '../static/img/icon-twitter.svg';
import Instagram from '../static/img/icon-instagram.svg';


export default function Header() {
  return (
    <div className='header'>
      <div>danbaker</div>
      <div className='socials'>
        <a href='https://github.com/legshampoo' target='_blank'>
          <img src={GitHub} alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/dan-baker-4703a189/' target='_blank'>
          <img src={LinkedIn} alt='linkedin' />
        </a>
        <a href='https://www.instagram.com/dans.party/?hl=en' target='_blank'>
          <img src={Instagram} alt='instagram' />
        </a>
        <a 
          href='/resume.pdf' 
          target='_blank'
          download>
          <img src={Instagram} alt='resume' />
        </a>
        {/* <img src={Twitter} alt='twitter' /> */}
      </div>
    </div>
  )
}