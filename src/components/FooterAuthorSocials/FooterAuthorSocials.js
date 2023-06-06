//child of Footer
import './FooterAuthorSocials.scss'

import Socials from '../Socials/Socials'

function FooterAuthorSocials({ author, theme }) {
    return (
        <div className='footerauthorsocials'>
            <p className='footerauthorsocials__author-name'>{author.name}</p>
            <Socials author={author} color={theme === 'light' ? 'black' : 'yellow'} socialsClass={'footer__socials'} socialIconImageClass={'footer__socials-image'} theme={theme} />
        </div>
    )
}

export default FooterAuthorSocials