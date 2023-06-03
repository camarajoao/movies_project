// child of Home page
import './ListOfMovies.scss';

function ListOfMovies(props) {

    const moviesList = props.movies.slice(0,6)

    return (
        <>
            <h1 className="section-separator">{props.sectionTitle}</h1>
            <div className="intheatres">
                {moviesList.length > 0 ? moviesList.map((movie) => (
                    <div className='intheatres__movie'>
                        <img src={props.imagesBaseUrl + movie.poster_path} className="intheatres__image" />
                        <h2 className='intheatres__title'>{movie.original_title}</h2>
                    </div>
                )) : null};
            </div>
        </>

    )
}

export default ListOfMovies