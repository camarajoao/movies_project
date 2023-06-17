//child of Socials
import './SocialIcon.scss';
import { Link } from 'react-router-dom';

function SocialIcon({ socialIcon, socialLink, socialIconLinkClass, socialIconImageClass, altText }) {
    return (
        <>
            <Link to={socialLink} target='blank' className={socialIconLinkClass ? socialIconLinkClass : null}>
                <img src={socialIcon} alt={altText} className={socialIconImageClass ? socialIconImageClass : 'social__icon'} />
            </Link>
        </>
    )
}

export default SocialIcon