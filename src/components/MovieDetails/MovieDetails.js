import './MovieDetails.scss';

function MovieDetails({ movieDetailsRequest, crew }) {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const director = crew.filter((item) => (
        item.job === "Director"
    ))

    const genres = movieDetailsRequest.genres.map((genre) => (
        genre.name
    ));

    const languages = movieDetailsRequest.spoken_languages.map((language) => (
        language.english_name
    ));

    const directors = director.map((person) => (
        person.name
    ));

    // console.log(genres.toString().split(","));

    return (
        <div className='moviedetails'>
            <h2 className='moviedetails__header'>Details</h2>
            <div className='moviedetails__categories'>
                <h4>Release date:&nbsp;</h4>
                <p>{movieDetailsRequest.release_date}</p>
            </div>
            <h4>Official site:&nbsp;</h4>
            <p>{movieDetailsRequest.homepage}</p>
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
                <p>{USDollar.format(movieDetailsRequest.budget)}</p>
            </div>
            <div className='moviedetails__categories'>
                <h4>Revenue:&nbsp;</h4>
                <p>{USDollar.format(movieDetailsRequest.revenue)}</p>
            </div>
        </div>
    )
}

export default MovieDetails