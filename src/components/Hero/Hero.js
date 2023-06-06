// child of Home page
import './Hero.scss'
import HeroPoster from "../../components/HeroPoster/HeroPoster";
import TrailerStage from '../TrailerStage/TrailerStage';

import { useState, useEffect, useRef } from "react";


function Hero(props) {

    const [current, setCurrent] = useState(0)

    const nextMovie = () => {
        setCurrent(current === props.movies.length - 1 ? 0 : current + 1);
    }
    const previousMovie = () => {
        setCurrent(current === 0 ? props.movies.length - 1 : current - 1);
    }

    // auto slider behaviour -> change to next slide every 3 seconds, unless mouse is over slide or media is playing
    const [hover, setHover] = useState(false);
    const [playing, setPlaying] = useState(false);
    const timeoutRef = useRef(null);
    useEffect(() => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current);
        }
        if (!hover && !playing) {
            timeoutRef.current = setInterval(nextMovie, 8000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, hover, playing]);


    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <TrailerStage movieId={props.movies[current].id} setState={setPlaying} notPlayable={nextMovie}/>
            <HeroPoster imagesBaseUrl={props.imagesBaseUrl} movie={props.movies[current]} genreList={props.genreList.genres} />
        </div>
    )
}

export default Hero