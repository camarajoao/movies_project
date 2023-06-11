// child of EmailIcon
import './EmailModal.scss';

import closeIconBlack from "../../assets/icons/close-black.svg";
import closeIconYellow from "../../assets/icons/close-yellow.svg";

function EmailModal({ show, onClose }) {

    if (show === false) {
        return null
    }

    return (
        <div className="emailmodal" onClick={() => onClose()}>
            <div className="emailmodal__content" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={() => onClose()}><img src={closeIconYellow} className="modal__close__icon" alt="close icon" /></button>
                <form className='form'>
                    <input className="form__input" type="text" placeholder="Name" id="name" name="name" />
                    <input className="form__input" type="text" placeholder="Email" id="email" name="email" />
                    <input className="form__input" type="text" id="address-to" name="address-to" hidden />
                    <textarea className="form__textarea" type='text' placeholder="Your message" name="textarea"></textarea>
                    <button className="form__button">SEND MESSAGE</button>
                </form>
            </div>
        </div >
    )
}

export default EmailModal