import "./AutocompleteSearch.scss";

import searchIconSilver from '../../assets/icons/search-silver.svg';
import searchIconBlack from '../../assets/icons/search-black.svg';
import { useEffect, useState, useRef } from "react";

import { getRequestParams, getDataFromAPI, debounce } from "../../helpers/utils";
import AutocompleteDropdown from "./AutocompleteDropdown/AutocompleteDropdown";


function AutocompleteSearch({ theme,sidebarState }) {

    // get a reference to the search input
    const searchInputRef = useRef(null);
    const [sidebarSearchInput, setSidebarSearchInput] = useState(null);
    useEffect(() => {
        setSidebarSearchInput(searchInputRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sidebarSearchInput]);

    // states for data retrieved from API
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        if(searchTerm.length > 0 && sidebarState) {
            // setting the request params for the API endpoint
            const searchParams = getRequestParams(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`);
            // make API request
            getDataFromAPI(searchParams, setSearchResults)
        }
        else {
            resetSearch()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, sidebarState]);

    const onInput = (e) => {
        setSearchTerm(e.target.value)
    }

    const resetSearch = () => {
        setSearchTerm('')
        setSearchResults(null)
        if(sidebarSearchInput){
            sidebarSearchInput.value = ''
        }
    }

    const results = searchResults ? searchResults.results.filter(movie => movie.adult === false && movie.original_language === "en" && movie.poster_path && movie.backdrop_path).slice(0,10) : null
    
    return (
        <div className="search">
            <input className="search-input" type="search" ref={searchInputRef} placeholder="Search movie" onChange={debounce(onInput, 500)}/>
            <button className="search-icon" type="submit">
                <img src={theme === 'light' ? searchIconBlack : searchIconSilver} alt="search-icon" className="search-icon__icon" />
            </button>
            <AutocompleteDropdown results={results} hasTerm={searchTerm.length > 0} />
        </div>
    )
}

export default AutocompleteSearch