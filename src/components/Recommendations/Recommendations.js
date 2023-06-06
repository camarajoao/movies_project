import './Recommendations.scss';

import { useState, useEffect, useRef } from "react";

import axios from 'axios';

import arrowLeftBlack from '../../assets/icons/arrow-left-black.svg';
import arrowLeftYellow from '../../assets/icons/arrow-left-yellow.svg';
import arrowRightBlack from '../../assets/icons/arrow-right-black.svg';
import arrowRightYellow from '../../assets/icons/arrow-right-yellow.svg';

function Recommendations({ theme, movieUrl }) {

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    const [recommended, setRecommended] = useState(null);
    const recommendations = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/569094/recommendations?language=en-US&page=1',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    useEffect(() => {
        axios
            .request(recommendations)
            .then(function (response) {
                setRecommended(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    if (!recommended) {
        return
    };

    return (
        <div className='recommendations'>
            <div className='recommendations__top'>
                <h2 className='recommendations__header'>Recommendations</h2>
                <div className='recommendations__scroll'>
                    <button className='recommendations__button-left' onClick={() => scroll(-250)}>
                        <img src={theme === 'light' ? arrowLeftBlack : arrowLeftYellow} className='recommendations__button-left__arrow' />
                    </button>
                    <button className='recommendations__button-right' onClick={() => scroll(250)}>
                        <img src={theme === 'light' ? arrowRightBlack : arrowRightYellow} className='recommendations__button-right__arrow' />
                    </button>
                </div>
            </div>
            <div className='recommendations__cast' ref={ref}>
                {recommended.map((item) => (
                    <div className='recommendations__container'>
                        <img src={movieUrl + item.poster_path} className='recommendations__movie-picture' />
                        <div className='recommendations__movie-details'>
                            <p>{item.original_title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recommendations