// child of Home page
import './TrailerStage.scss'

import { useState, useEffect } from "react";
import ReactPlayer from 'react-player/lazy'

import { getRequestParams, getDataFromAPI } from '../../utils';
import movieTheatre from '../../assets/images/favpng_theater-drapes-and-stage-curtains-theatre.png'

function TrailerStage(props) {

    // request url -> use movie ID from props
    const reqUrl = `https://api.themoviedb.org/3/movie/${props.movieId}/videos?language=en-US`
    // setting the request params for each of the API endpoints
    const trailerParams = getRequestParams(reqUrl);
    const [movieTrailers, setMovieTrailers] = useState(null);
    //function below triggers the helper function
    const getTrailers = () => getDataFromAPI(trailerParams, setMovieTrailers);

    // this runs the getData trigger function as useEffect
    useEffect(() => {
        getTrailers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieTrailers]);

    // handle video play state
    const handlePlay = () => {
        props.setState(true);
    };

    // wait until all requests are fulfilled to render page
    if (!movieTrailers) {
        return
    };

    // try to find a official trailer
    const officialTrailer = movieTrailers.results.find(trailer => trailer.name.includes("Official Trailer"))
    // set displayed trailer as the official, if one was found, or the latest movie trailer in the API results list
    const displayedTrailer = officialTrailer ? officialTrailer : movieTrailers.results[movieTrailers.results.length - 1]

    // generate youtube url
    const reactPlayerUrl = `https://www.youtube.com/embed/${displayedTrailer.key}`
    
    return (
        <div className='trailerstage__background'>
            <img src={movieTheatre} className='trailerstage__image' />
            <div className='trailerstage'>
                <div className='player-wrapper' onMouseEnter={() => props.setHover(true)} onMouseLeave={() => props.setHover(false)}>
                    <ReactPlayer
                        className='react-player'
                        url={reactPlayerUrl}
                        width='100%'
                        height='100%'
                        onPlay={handlePlay}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default TrailerStage