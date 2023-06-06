import './MovieOverview.scss';

function MovieOverview({ movieDetailsRequest }) {

    return (
        <div className='movie-overview'>
            <p className='movie-overview__tagline'>{movieDetailsRequest.tagline !== '' ? movieDetailsRequest.tagline : null}</p>
            <h2 className='movie-overview__header'>Overview</h2>
            <p>{movieDetailsRequest.overview}</p>
        </div>
    )
}

export default MovieOverview