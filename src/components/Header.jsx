import GitHub from '../static/img/icon-github.svg'
import LinkedIn from '../static/img/icon-linkedin.svg'
import Twitter from '../static/img/icon-twitter.svg';

export default function Header() {
  return (
    <div className='header'>
      <div>danbaker</div>
      <div className='socials'>
        <img src={GitHub} alt='github' />
        <img src={LinkedIn} alt='linkedin' />
        <img src={Twitter} alt='twitter' />
      </div>
    </div>
  )
}