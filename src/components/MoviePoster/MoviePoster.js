import './MoviePoster.scss';

function MoviePoster({ movieDetails, imageBaseUrl }) {

    return (
        <div className='movie-poster'>
            <div className='background-gradient'></div>
            <img src={imageBaseUrl + movieDetails.backdrop_path} className='movie-poster__backdrop' alt={`Poster of the movie ${movieDetails.originalTitle}`}/>
            <img src={imageBaseUrl + movieDetails.poster_path} className='movie-poster__poster' alt={`Poster of the movie ${movieDetails.originalTitle}`} />
        </div>
    )
}

export default MoviePoster