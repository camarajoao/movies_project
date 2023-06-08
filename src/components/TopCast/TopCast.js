import './TopCast.scss';

import { useState, useEffect, useRef } from "react";

import axios from 'axios';

import arrowLeftBlack from '../../assets/icons/arrow-left-black.svg';
import arrowLeftYellow from '../../assets/icons/arrow-left-yellow.svg';
import arrowRightBlack from '../../assets/icons/arrow-right-black.svg';
import arrowRightYellow from '../../assets/icons/arrow-right-yellow.svg';

function TopCast({ theme, movieUrl, profilePic }) {

    const ref = useRef(null);

    const top10 = profilePic.slice(0, 10);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div className='topcast'>
            <div className='topcast__top'>
                <h2 className='topcast__header'>Top Cast</h2>
                <div className='topcast__scroll'>
                    <button className='topcast__button-left' onClick={() => scroll(-250)}>
                        <img src={theme === 'light' ? arrowLeftBlack : arrowLeftYellow} className='topcast__button-left__arrow' />
                    </button>
                    <button className='topcast__button-right' onClick={() => scroll(250)}>
                        <img src={theme === 'light' ? arrowRightBlack : arrowRightYellow} className='topcast__button-right__arrow' />
                    </button>
                </div>
            </div>
            <div className='topcast__cast' ref={ref}>
                {top10.map((item) => (
                    <div className='topcast__profile-container'>
                        <img src={movieUrl + item.profile_path} className='topcast__profile-picture' />
                        <div className='topcast__profile-details'>
                            <h4>{item.name}</h4>
                            <p>{item.character}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCast