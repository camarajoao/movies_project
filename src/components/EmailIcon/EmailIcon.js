import './EmailIcon.scss'

import { Link } from 'react-router-dom'

import { useState } from "react";

import emailIconBlack from '../../assets/icons/envelope-at-black.svg'
import emailIconYellow from '../../assets/icons/envelope-at-yellow.svg'
import EmailModal from '../EmailModal/EmailModal';

function EmailIcon({ socialLink, closeContent, theme }) {

    const handleClick = (e) => {
        e.stopPropagation();
        closeContent();
    }

    const [show, setShow] = useState(false);

    const onClose = () => setShow(false)

    return (
        <>
            <Link onClick={() => setShow(true)}>
                <img src={theme === 'light' ? emailIconBlack : emailIconYellow} alt={'closed envelope icon in gold'} className='social__icon' />
            </Link>
            <EmailModal show={show} onClose={onClose} theme={theme} />
        </>
    )
}

export default EmailIcon