import "./AutocompleteSearch.scss";

import searchIconSilver from '../../assets/icons/search-silver.svg';
import searchIconBlack from '../../assets/icons/search-black.svg';
import { useEffect, useState } from "react";

import { getRequestParams, getDataFromAPI, debounce } from "../../helpers/utils";
import AutocompleteDropdown from "./AutocompleteDropdown/AutocompleteDropdown";


function AutocompleteSearch({ theme }) {

    // states for data retrieved from API
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);


    useEffect(() => {
        if(searchTerm.length > 0) {
            // setting the request params for the API endpoint
            const searchParams = getRequestParams(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`);
            // make API request
            getDataFromAPI(searchParams, setSearchResults)
        }
        else {
            setSearchResults(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    const onInput = (e) => {
        setSearchTerm(e.target.value)
    }
    
    return (
        <div className="search">
            <input className="search-input" type="search" placeholder="Search movie" onChange={debounce(onInput, 500)}/>
            <button className="search-icon" type="submit">
                <img src={theme === 'light' ? searchIconBlack : searchIconSilver} alt="search-icon" className="search-icon__icon" />
            </button>
            <AutocompleteDropdown results={searchResults ? searchResults.results.slice(0,10): null} hasTerm={searchTerm.length > 0} theme={theme} />
        </div>
    )
}

export default AutocompleteSearch