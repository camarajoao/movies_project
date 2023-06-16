import "./AutocompleteDropdown.scss";
import { Link } from "react-router-dom";

function AutocompleteDropdown({ results, hasTerm }) {

    const imagesBaseUrl = localStorage.getItem('imagesBaseUrl');

    return (
        <div className="dropdown">
            {!results ? null
                : results.length > 0 ?
                    <ul className="dropdown__list">
                        {results.map((movie, index) => (
                            <li className="dropdown__list__item">
                                <Link to={`movies/${movie.id}`} key={index} reloadDocument className="dropdown__list__item__link">
                                    <div className="dropdown__movie">
                                        <img src={imagesBaseUrl + movie.poster_path} className="dropdown__movie__poster" />
                                        <h4 className="dropdown__movie__title">{movie.title}<span>{movie.release_date ? ` (${movie.release_date.slice(0, 4)})` : null}</span></h4>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    :
                    hasTerm ? <p className="dropdown-error">No results found</p>
                        :
                        null
            }

        </div>
    )
}

export default AutocompleteDropdown