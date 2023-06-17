import './EmailIcon.scss'

import { Link } from 'react-router-dom'

import { useState } from "react";

import emailIconBlack from '../../assets/icons/envelope-at-black.svg'
import emailIconYellow from '../../assets/icons/envelope-at-yellow.svg'
import EmailModal from '../EmailModal/EmailModal';

function EmailIcon({ theme, author }) {

    const [show, setShow] = useState(false);

    const onClose = () => setShow(false);

    return (
        <>
            <Link onClick={() => setShow(true)}>
                <img src={theme === 'light' ? emailIconBlack : emailIconYellow} alt={'closed envelope icon in gold'} className='social__icon' />
            </Link>
            <EmailModal show={show} onClose={onClose} theme={theme} sendTo={author.toUpperCase()} />
        </>
    )
}

export default EmailIcon