// child of Home page
import { Link } from 'react-router-dom';
import './ListOfMovies.scss';

import { useRef } from "react";

import arrowLeftBlack from '../../assets/icons/arrow-left-black.svg';
import arrowLeftYellow from '../../assets/icons/arrow-left-yellow.svg';
import arrowRightBlack from '../../assets/icons/arrow-right-black.svg';
import arrowRightYellow from '../../assets/icons/arrow-right-yellow.svg';

function ListOfMovies(props) {

    const moviesList = props.movies.slice(0, 12)

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <>
            <div className='list-of-movies__top'>
                <h1 className="list-of-movies__header">{props.sectionTitle}</h1>
                <div className='list-of-movies__scroll'>
                    <button className='list-of-movies__button-left' onClick={() => scroll(-250)}>
                        <img src={props.theme === 'light' ? arrowLeftBlack : arrowLeftYellow} className='list-of-movies__button-left__arrow' alt="circle with an arrow pointing left"/>
                    </button>
                    <button className='list-of-movies__button-right' onClick={() => scroll(250)}>
                        <img src={props.theme === 'light' ? arrowRightBlack : arrowRightYellow} className='list-of-movies__button-right__arrow' alt="circle with an arrow pointing right"/>
                    </button>
                </div>
            </div>
            <div className="list-of-movies__movies" ref={ref}>
                {moviesList.length > 0 ? moviesList.map((movie) => (
                    <Link className='list-of-movies__movie__link' reloadDocument relative='router' to={`../movies/${movie.id}`}>
                        <div className='list-of-movies__movie'>
                            <img src={props.imagesBaseUrl + movie.poster_path} className="list-of-movies__image" alt={`official poster for the movie ${movie.original_title}`} />
                            <h4 className='list-of-movies__title'>{movie.original_title}</h4>
                        </div>
                    </Link>
                )) : null}
            </div>
        </>

    )
}

export default ListOfMovies