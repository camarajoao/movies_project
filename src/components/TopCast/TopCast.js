import './TopCast.scss';

import { useRef } from "react";

import arrowLeftBlack from '../../assets/icons/arrow-left-black.svg';
import arrowLeftYellow from '../../assets/icons/arrow-left-yellow.svg';
import arrowRightBlack from '../../assets/icons/arrow-right-black.svg';
import arrowRightYellow from '../../assets/icons/arrow-right-yellow.svg';
import profileAvatar from '../../assets/images/profile_avatar.png';

function TopCast({ theme, imageBaseUrl, cast }) {

    const ref = useRef(null);

    const top10 = cast.slice(0, 10);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div className='topcast'>
            <div className='topcast__top'>
                <h2 className='topcast__header'>Top Cast</h2>
                <div className='topcast__scroll'>
                    <button className='topcast__button-left' onClick={() => scroll(-250)}>
                        <img src={theme === 'light' ? arrowLeftBlack : arrowLeftYellow} className='topcast__button-left__arrow' alt={'icon with an arrow pointing left'}/>
                    </button>
                    <button className='topcast__button-right' onClick={() => scroll(250)}>
                        <img src={theme === 'light' ? arrowRightBlack : arrowRightYellow} className='topcast__button-right__arrow' alt={'icon with an arrow pointing right'}/>
                    </button>
                </div>
            </div>
            <div className='topcast__cast' ref={ref}>
                {top10.map((item) => (
                    <div className='topcast__profile-container'>
                        <img src={item.profile_path? imageBaseUrl + item.profile_path : profileAvatar} className='topcast__profile-picture' alt={`${item.name} headshot`} />
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