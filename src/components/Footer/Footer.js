import './Footer.scss';
import FooterAuthorSocials from '../FooterAuthorSocials/FooterAuthorSocials';
import authors from '../../data/authors.json'

import backToTopBlack from '../../assets/icons/back-to-top-black.svg'
import backToTopYellow from '../../assets/icons/back-to-top-yellow.svg'
import { Link } from 'react-router-dom';

function Footer({ theme }) {

  return (
    <footer className='footer'>
      <Link to='./' className='footer__back-to-top' onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth", }); }}>
        <img src={theme === 'light' ? backToTopBlack : backToTopYellow} className='footer__back-to-top-image' />
      </Link>
      <p className='footer__header'>Designed and Developed by</p>
      <div className='footer__footerauthorsocials'>
        {authors.map((author, index) => (
          <FooterAuthorSocials author={author} key={index} theme={theme} />
        ))}
      </div>
      <p className='footer__comment'>This website was designed and developed without the use of any front-end UI libraries.</p>
    </footer>
  )
}

export default Footer