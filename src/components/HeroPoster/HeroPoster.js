// child of Home page
import './HeroPoster.scss';

import { useState, useEffect } from "react";
import axios from 'axios';
import thumbUp from '../../assets/icons/hand-thumbs-up-fill.svg';
import thumbDown from '../../assets/icons/hand-thumbs-down-fill.svg';

function HeroPoster({ baseUrl, requestUrl, genreList }) {



    const options = {
        method: 'GET',
        url: requestUrl,
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        axios
            .request(options)
            .then((response) => {
                setMovieData(response.data.results[0]);
            })
            .catch(function (error) {
                console.error(error);
            })
    }, [])

    if (!movieData) {
        return
    }

    const moviePoster = `${baseUrl}${movieData.poster_path}`;

    return (
        <div className="poster">
            <img src={moviePoster} className="poster__image" />
            <div className='poster__description'>
                <h2 className='poster__description__title'>{movieData.original_title}</h2>
                <div className='poster__description__release'>
                    <p className='poster__description__release__date'>Release Date</p>
                    <p>{movieData.release_date}</p>
                </div>
                <div className='poster__description__rating'>
                    <p className='poster__description__rating__header'>Rating:</p>
                    <p>{movieData.vote_average}</p>
                    <img src={movieData.vote_average >= 6.0 ? thumbUp : thumbDown} className='poster__description__rating__thumb' />
                </div>
                <div className='poster__description__genre'>
                    <p className='poster__description__genre__header'>Genre</p>
                    {/* <p>{movieData.genre_ids.map((id, index) => genreList.find((genre) => id === genre.id))}</p> */}
                </div>
            </div>
        </div>
    )
}

export default HeroPoster