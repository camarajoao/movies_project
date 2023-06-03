// child of Home page
import './TrailerStage.scss'

import { useState, useEffect } from "react";

import { getRequestParams, getDataFromAPI } from '../../utils';

function TrailerStage(props) {

    const reqUrl = `https://api.themoviedb.org/3/movie/${props.movieId}/videos?language=en-US`
    const trailerParams = getRequestParams(reqUrl);

    const [movieTrailer, setMovieTrailer] = useState(null);
    
    //function below triggers the helper function
    const getTrailer = () => getDataFromAPI(trailerParams, setMovieTrailer);

    useEffect(() => {
        getTrailer();
    }, []);

    if (!movieTrailer) {
        return
    };

    const officialTrailer = movieTrailer.results.find(trailer => trailer.name.includes("Official Trailer"))
    const displayedTrailer = officialTrailer ? officialTrailer : movieTrailer.results[movieTrailer.results.length - 1]

    const youtubeURL = "https://www.youtube.com/embed/";
    const videoConfig = "?autoplay=1&modestbranding=1&fs=1&rel=0"

    return (
        <div className="trailer">
            <iframe
                className="responsive-iframe"
                src={`${youtubeURL}${displayedTrailer.key}${videoConfig}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Embedded youtube"
            />
        </div>
    )
}

export default TrailerStage