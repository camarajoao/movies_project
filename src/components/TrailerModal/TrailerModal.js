import "./TrailerModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

export default function TrailerModal({ show, onClose }) {

    if (show === false) {
        return null
    }

    return (
        <div className="modal" onClick={() => onClose()}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={() => onClose()}><img src={closeIcon} className="modal__close__icon" alt="close icon" /></button>
            </div>
        </div >
    )
}