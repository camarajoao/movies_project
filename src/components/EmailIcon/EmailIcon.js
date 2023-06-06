import './EmailIcon.scss'

import { Link } from 'react-router-dom'

import emailIconBlack from '../../assets/icons/envelope-at-black.svg'
import emailIconYellow from '../../assets/icons/envelope-at-yellow.svg'

function EmailIcon({ socialLink, closeContent, theme }) {

    const handleClick = (e) => {
        e.stopPropagation();
        closeContent();
    }

    return (
        <>
            <Link to={socialLink} onClick={handleClick}>
                <img src={theme === 'light' ? emailIconBlack : emailIconYellow} alt={'closed envelope icon in gold'} className='social__icon' />
            </Link>
        </>
    )
}

export default EmailIcon