import './MovieDetails.scss';

function MovieDetails({ movieDetails, crew }) {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const director = crew.filter((item) => (
        item.job === "Director"
    ));

    const genres = movieDetails.genres.map((genre) => (
        genre.name
    ));

    const languages = movieDetails.spoken_languages.map((language) => (
        language.english_name
    ));

    const directors = director.map((person) => (
        person.name
    ));

    return (
        <div className='moviedetails'>
            <h2 className='moviedetails__header'>Details</h2>
            <div className='moviedetails__categories'>
                <h4>Release date:&nbsp;</h4>
                <p>{movieDetails.release_date ? movieDetails.release_date : 'not available'}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Official site:&nbsp;</h4>
                {movieDetails.homepage ? <a href={movieDetails.homepage} target='_blank' rel='noreferrer'>{movieDetails.homepage}</a> : 'not available'}
            </div>
            <div className='moviedetails__categories'>
                <h4>Genres:&nbsp;</h4>
                <p>{genres.length > 0 ? genres.join(', ') : 'not available'}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Languages:&nbsp;</h4>
                <p>{languages.length > 0 ? languages.join(', '): 'not available'}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Director:&nbsp;</h4>
                <p>{directors.length > 0 ? directors.join(', ') : 'not available'}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Budget:&nbsp;</h4>
                <p>{movieDetails.budget > 0 ? USDollar.format(movieDetails.budget) : 'not available'}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Revenue:&nbsp;</h4>
                <p>{movieDetails.revenue > 0 ? USDollar.format(movieDetails.revenue): 'not available'}</p>
            </div>
        </div>
    )
}

export default MovieDetails