import './MovieAdditionalDetails.scss';

import starIcon from '../../assets/icons/star-yellow.svg';
import playIconBlack from '../../assets/icons/play-black.svg';
import playIconYellow from '../../assets/icons/play-yellow.svg';

function MovieAdditionalDetails({ movieDetailsRequest, theme }) {

    const movieRating = movieDetailsRequest.vote_average.toString().slice(0, 3);

    // const [show, setShow] = useState(false);

    // const onClose = () => setShow(false)

    // <WarehouseModal
    //     onClose={onClose}
    //     show={show}
    //     warehouse={warehouse}
    //     id={warehouse.id}
    // />

    return (
        <div className='movie__rating-trailer'>
            <div className='movie__rating'>
                <img src={starIcon} className='movie__rating__star' />
                <p className='movie__rating__rate'>{`${movieRating}/10`}</p>
            </div>
            <div className="movie__rating__pipe"></div>
            <div className="movie__rating__play">
                <img src={theme === 'light' ? playIconBlack : playIconYellow} className="movie__rating__play__icon" />
                <p className='movie__rating__play__text'>Play Trailer</p>
            </div>
        </div>
    )
}

export default MovieAdditionalDetails