import "./AutocompleteDropdown.scss";
import { Link } from "react-router-dom";

function AutocompleteDropdown({ theme, results, hasTerm }) {

    return (
        <div className="dropdown">
            {!results ? null
            : results.length > 0 ? 
                <div className="dropdown-content">
                    {results.map((movie, index) => (
                        <Link to={`movies/${movie.id}`} key={index} reloadDocument>{movie.title}</Link>
                    ))}
                </div>
            :
                hasTerm ? <p className="dropdown-error">No results found</p>
            :
            null 
            }

        </div>
    )
}

export default AutocompleteDropdown