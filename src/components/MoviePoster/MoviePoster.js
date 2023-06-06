import './MoviePoster.scss';

function MoviePoster({ movieDetailsRequest, movieUrl }) {

    return (
        <div className='movie-poster'>
            <div className='background-gradient'></div>
            <img src={movieUrl + movieDetailsRequest.backdrop_path} className='movie-poster__backdrop' />
            <img src={movieUrl + movieDetailsRequest.poster_path} className='movie-poster__poster' />
        </div>
    )
}

export default MoviePoster