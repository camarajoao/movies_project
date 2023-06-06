// child of Home page
import './HeroPoster.scss';

import thumbUp from '../../assets/icons/hand-thumbs-up-fill.svg';
import thumbDown from '../../assets/icons/hand-thumbs-down-fill.svg';

function HeroPoster(props) {

    const moviePoster = `${props.imagesBaseUrl}${props.movie.poster_path}`;

    const genres = props.movie.genre_ids.map(id => {
        const genre = props.genreList.find((genre) => id === genre.id)
        return genre.name
    })

    return (
        <div className="poster">
            <img src={moviePoster} className="poster__image" alt={`official poster for the movie ${props.movie.original_title}`}/>
            <div className='poster__description'>
                <h2 className='poster__description__title'>{props.movie.original_title}</h2>
                <div className='poster__description__release'>
                    <p className='poster__description__release__date'>Release Date</p>
                    <p>{props.movie.release_date}</p>
                </div>
                <div className='poster__description__rating'>
                    <p className='poster__description__rating__header'>Rating:</p>
                    <p>{props.movie.vote_average}</p>
                    <img src={props.movie.vote_average >= 6.0 ? thumbUp : thumbDown} className='poster__description__rating__thumb' alt={props.movie.vote_average >= 6.0 ? 'green thumb up' : 'red thumb down'}/>
                </div>
                <div className='poster__description__genre'>
                    <p className='poster__description__genre__header'>Genre</p>
                    <p>{genres.join(", ")}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroPoster