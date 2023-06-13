import './MovieOverview.scss';

function MovieOverview({ movieDetails }) {

    return (
        <div className='movie-overview'>
            <p className='movie-overview__tagline'>{movieDetails.tagline !== '' ? movieDetails.tagline : null}</p>
            <h2 className='movie-overview__header'>Overview</h2>
            <p>{movieDetails.overview ? movieDetails.overview : 'Not available.'}</p>
        </div>
    )
}

export default MovieOverview