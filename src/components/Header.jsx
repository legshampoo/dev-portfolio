import GitHub from '../static/img/icon-github.svg'
import LinkedIn from '../static/img/icon-linkedin.svg'
import Twitter from '../static/img/icon-twitter.svg';

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

        {/* <img src={Twitter} alt='twitter' /> */}
      </div>
    </div>
  )
}