// child of EmailIcon
import './EmailModal.scss';

import closeIconYellow from "../../assets/icons/close-yellow.svg";

import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import { sendSuccess, sendError } from '../../helpers/utils';

function EmailModal({ show, onClose, sendTo }) {

    //form inputs references
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    //valid input checks references
    const [validSenderName, setValidSenderName] = useState(false);
    const [validSenderEmail, setValidSenderEmail] = useState(false);
    const [validSubject, setValidSubject] = useState(false);
    const [validMessage, setValidMessage] = useState(false);
    const [showErrors, setShowErrors] =useState(false);


    //individual inputs validation
    //check sender name
    const validateSenderName = () => { setValidSenderName(!senderName ? false : true) };
    //check sender email
    const validateSenderEmail = () => { setValidSenderEmail(!senderEmail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? false: true )};
    //check sendTo
    const validateSubject = () => { setValidSubject(!subject ? false : true) };
    //check message
    const validateMessage = () => { setValidMessage(!message ? false : true) };

    useEffect(() => {
        //check sender name
        validateSenderName();
        //check sender email
        validateSenderEmail();
        //check subject
        validateSubject();
        //check message
        validateMessage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [senderName, senderEmail, subject, message]);

    const validForm = () => {
        if(validSenderName && validSenderEmail && validSubject && validMessage) {
            setShowErrors(false);
            return true;
        }
        else {
            setShowErrors(true);
            return false;
        }
    }

    //form reset -> successful submission
    const resetForm = (e) => {
        setSenderName('');
        setSenderEmail('');
        setSubject('');
        setMessage('');
        e.target.reset();
    }

    //handling form submission
    const sendEmail = (e) => {
        e.preventDefault();
        if (validForm()) {
            const receiver = {
                emailServiceId: process.env['REACT_APP_EMAIL_SERVICE_ID_' + sendTo],
                emailServiceKey: process.env['REACT_APP_EMAIL_SERVICE_KEY_' + sendTo]
            }

            emailjs.sendForm(receiver.emailServiceId, 'contact_portfolio', e.target, receiver.emailServiceKey)
                .then((result) => {
                    sendSuccess('Message sent!');
                    resetForm(e);
                })
                .catch((error) => {
                    sendError('Sorry, an error occurred.');
                });
            
            onClose()
        }
    };

    if (show === false) {
        return null
    }

    return (
        <div className="emailmodal" onClick={() => onClose()}>
            <div className="emailmodal__content" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={() => onClose()}><img src={closeIconYellow} className="modal__close__icon" alt="close icon" /></button>
                <form className='form' onSubmit={sendEmail}>
                    <input className={`form__input ${!validSenderName && showErrors ? 'form__input--error' : ''}`} type="text" placeholder="Name" id="name" name="from_name" onChange={(e) => setSenderName(e.target.value)} />
                    <input className={`form__input ${!validSenderEmail && showErrors ? 'form__input--error' : ''}`} type="text" placeholder="Email" id="email" name="reply_to" onChange={(e) => setSenderEmail(e.target.value)} />
                    <input className={`form__input ${!validSubject && showErrors ? 'form__input--error' : ''}`} type="text" placeholder="Subject" id="subject" name="subject" onChange={(e) => setSubject(e.target.value)} />
                    <input className={'form__input'} type="text" id="source" name="source" value='Just Movies' hidden readOnly/>
                    <textarea className={`form__textarea ${!validMessage && showErrors ? 'form__textarea--error' : ''}`} type='text' placeholder="Your message" name="message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <button className="form__button" type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </div >
    )
}

export default EmailModal