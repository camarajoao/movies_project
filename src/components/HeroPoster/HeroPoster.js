// child of Home page
import './HeroPoster.scss';

import { Link } from 'react-router-dom';

import { useWindowSize } from '../../helpers/useWindowSize';

function HeroPoster(props) {

    const isTablet = useWindowSize(768);

    const moviePoster = `${props.imagesBaseUrl}${props.movie.poster_path}`;

    const backdropImage = `${props.imagesBaseUrl}${props.movie.backdrop_path}`;

    const genres = props.movie.genre_ids.map(id => {
        const genre = props.genreList.find((genre) => id === genre.id);
        return genre.name;
    });



    return (
        <div className="poster" onMouseEnter={() => props.setHover(true)} onMouseLeave={() => props.setHover(false)}>
            <Link className="poster__link" to={`movies/${props.movie.id}`}>
                <img src={moviePoster} className="poster__image" alt={`official poster for the movie ${props.movie.original_title}`} />
            </Link>
            {isTablet ? <img src={backdropImage} className="poster__backdrop-image" alt={`official backdrop-poster for the movie ${props.movie.original_title}`} /> : null}
            <div className='poster__description'>
                <h2 className='poster__description__title'>{props.movie.original_title}</h2>
                <div className='poster__description__release'>
                    <h4 className='poster__description__release__header'>Release Date:&nbsp;</h4>
                    <p>{props.movie.release_date}</p>
                </div>
                <div className='poster__description__rating'>
                    <h4 className='poster__description__rating__header'>Rating:&nbsp;</h4>
                    <p>{props.movie.vote_average}</p>
                </div>
                <div className='poster__description__genre'>
                    <h4 className='poster__description__genre__header'>Genre:&nbsp;</h4>
                    <p>{genres.join(", ")}</p>
                </div>
                <h4 className="poster__overview__header">Overview</h4>
                <p className="poster__overview__content">{props.movie.overview}</p>
            </div>
        </div>
    )
}

export default HeroPoster