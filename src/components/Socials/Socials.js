//child of SidebarAuthorContact and SocialSide
import './Socials.scss'

import { getSocials } from '../../helpers/utils';

import SocialIcon from '../SocialIcon/SocialIcon';
import EmailIcon from '../EmailIcon/EmailIcon';

function Socials({ author, socialsClass, color, socialIconImageClass, theme }) {

    const socials = getSocials(author.tag, color)

    return (
        <div className={socialsClass}>
            {socials.map((social, index) => (
                <SocialIcon 
                    socialIcon={social.icon} 
                    socialLink={social.link} 
                    altText={social.alt} 
                    key={index} 
                    socialIconImageClass={socialIconImageClass} />
            ))}
            <EmailIcon 
                socialLink={author.tag === "JoaoCamara" ? "/joaocamara/#author-contact-form" : "/thaiscampos/#author-contact-form"} 
                theme={theme} />
        </div>
    )
}

export default Socials