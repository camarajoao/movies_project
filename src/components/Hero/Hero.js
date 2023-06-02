// child of Home page
import './Hero.scss'

import { useState, useEffect } from "react";

import axios from 'axios';

function Hero() {

    const trailerRequest = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/502356/videos?language=en-US',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    const [movieTrailer, setMovieTrailer] = useState(null);

    useEffect(() => {
        axios
            .request(trailerRequest)
            .then(function (response) {
                setMovieTrailer(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    if (!movieTrailer) {
        return
    };

    const movieURL = movieTrailer[27].key;

    const youtubeURL = "https://www.youtube.com/embed/";
    const videoConfig = "?autoplay=1&modestbranding=1&fs=1&rel=0"

    return (
        <div className="trailer">
            <iframe
                className="responsive-iframe"
                src={`${youtubeURL}${movieURL}${videoConfig}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Embedded youtube"
            />
        </div>
    )
}

export default Hero