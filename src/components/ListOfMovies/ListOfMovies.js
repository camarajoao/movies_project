// child of Home page
import './ListOfMovies.scss';

import { useState, useEffect } from "react";

import axios from 'axios';

function ListOfMovies(props) {

    const options = {
        method: 'GET',
        url: props.requestUrl,
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    const [moviesList, setMoviesList] = useState(null);

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                setMoviesList(response.data.results.slice(0, 6));

            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    if (!moviesList) {
        return
    };

    return (
        <>
            <h1 className="section-separator">{props.sectionTitle}</h1>
            <div className="intheatres">
                {moviesList.map((movie) => (
                    <div className='intheatres__movie'>
                        <img src={props.baseUrl + movie.poster_path} className="intheatres__image" />
                        <h2 className='intheatres__title'>{movie.original_title}</h2>
                    </div>
                ))};
            </div>
        </>

    )
}

export default ListOfMovies