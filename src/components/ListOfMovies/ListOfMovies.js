// child of Home page
import './ListOfMovies.scss';

function ListOfMovies(props) {

    const moviesList = props.movies.slice(0,6)

    return (
        <>
            <h1 className="section-separator">{props.sectionTitle}</h1>
            <div className="movieslist">
                {moviesList.length > 0 ? moviesList.map((movie) => (
                    <div className='movieslist__movie'>
                        <img src={props.imagesBaseUrl + movie.poster_path} className="movieslist__image" alt={`official poster for the movie ${movie.original_title}`}/>
                        <h2 className='movieslist__title'>{movie.original_title}</h2>
                    </div>
                )) : null};
            </div>
        </>

    )
}

export default ListOfMovies