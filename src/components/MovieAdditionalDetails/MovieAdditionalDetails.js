import './MovieAdditionalDetails.scss';

import { useState } from "react";

import starIcon from '../../assets/icons/star-yellow.svg';
import playIconBlack from '../../assets/icons/play-black.svg';
import playIconYellow from '../../assets/icons/play-yellow.svg';
import TrailerModal from '../TrailerModal/TrailerModal';

function MovieAdditionalDetails({ movieDetails, theme }) {

    const movieRating = movieDetails.vote_average.toString().slice(0, 3);

    const [show, setShow] = useState(false);

    const onClose = () => setShow(false)

    return (
        <div className='movie__rating-trailer'>
            <div className='movie__rating'>
                <img src={starIcon} className='movie__rating__star' />
                <p className='movie__rating__rate'>{`${movieRating}/10`}</p>
            </div>
            <div className="movie__rating__pipe"></div>
            <button className="movie__rating__play" onClick={() => setShow(true)}>
                <img src={theme === 'light' ? playIconBlack : playIconYellow} className="movie__rating__play__icon" />
                <p className='movie__rating__play__text'>Play Trailer</p>
            </button>
            <TrailerModal 
                onClose={onClose} 
                show={show}
                movieId={movieDetails.id}
            />
        </div>
    )
}

export default MovieAdditionalDetails