import './MovieDetails.scss';

function MovieDetails({ movieDetails, crew }) {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const director = crew.filter((item) => (
        item.job === "Director"
    ))

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
                <p>{movieDetails.release_date}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Official site:&nbsp;</h4>
                <a href={movieDetails.homepage} target='_blank' rel='noreferrer'>{movieDetails.homepage}</a>
            </div>
            <div className='moviedetails__categories'>
                <h4>Genres:&nbsp;</h4>
                <p>{genres.join(', ')}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Languages:&nbsp;</h4>
                <p>{languages.join(', ')}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Director:&nbsp;</h4>
                <p>{directors.join(', ')}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Budget:&nbsp;</h4>
                <p>{USDollar.format(movieDetails.budget)}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Revenue:&nbsp;</h4>
                <p>{USDollar.format(movieDetails.revenue)}</p>
            </div>
        </div>
    )
}

export default MovieDetails