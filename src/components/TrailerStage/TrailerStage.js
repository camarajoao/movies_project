// child of Home page
import './TrailerStage.scss'

import { useState, useEffect } from "react";
import ReactPlayer from 'react-player/lazy'

import { getTrailerUrl } from "../../helpers/utils";
import movieTheatre from '../../assets/images/favpng_theater-drapes-and-stage-curtains-theatre.png'

function TrailerStage(props) {
    // states for data retrieved from API
    const [trailerUrl, setTrailerUrl] = useState(null);

    // this runs the getData trigger function as useEffect
    useEffect(() => {
        getTrailerUrl(props.movieId, setTrailerUrl)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.movieId]);

    // handle video play state
    const handlePlay = () => {
        props.setState(true);
    };
    
    return (
        <div className='trailerstage__background'>
            <img src={movieTheatre} className='trailerstage__image' />
            <div className='trailerstage'>
                <div className='player-wrapper' onMouseEnter={() => props.setHover(true)} onMouseLeave={() => props.setHover(false)}>
                    <ReactPlayer
                        className='react-player'
                        url={trailerUrl}
                        width='100%'
                        height='100%'
                        onPlay={handlePlay}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default TrailerStage