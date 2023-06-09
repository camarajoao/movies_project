import './MoviePoster.scss';

function MoviePoster({ movieDetails, imageBaseUrl }) {

    return (
        <div className='movie-poster'>
            <div className='background-gradient'></div>
            <img src={imageBaseUrl + movieDetails.backdrop_path} className='movie-poster__backdrop' />
            <img src={imageBaseUrl + movieDetails.poster_path} className='movie-poster__poster' />
        </div>
    )
}

export default MoviePoster