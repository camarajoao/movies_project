import "./TrailerModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg";

import ReactPlayer from 'react-player/lazy';
import { getTrailerUrl } from "../../helpers/utils";
import { useState, useEffect } from "react";

export default function TrailerModal({ show, onClose, movieId }) {
    // states for data retrieved from API
    const [trailerUrl, setTrailerUrl] = useState(null);
    
    // this runs the getData trigger function as useEffect
    useEffect(() => {
        getTrailerUrl(movieId, setTrailerUrl)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    if (show === false) {
        return null
    }

    return (
        <div className="modal" onClick={() => onClose()}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={() => onClose()}><img src={closeIcon} className="modal__close__icon" alt="close icon" /></button>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url={trailerUrl}
                        width='80%'
                        height='80%'
                    />
                </div>
            </div>
        </div >
    )
}