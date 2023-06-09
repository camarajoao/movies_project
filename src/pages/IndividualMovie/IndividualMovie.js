import './IndividualMovie.scss';

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import MovieHeader from '../../components/MovieHeader/MovieHeader';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieAdditionalDetails from '../../components/MovieAdditionalDetails/MovieAdditionalDetails';
import MovieOverview from '../../components/MovieOverview/MovieOverview';
import TopCast from '../../components/TopCast/TopCast';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Recommendations from '../../components/Recommendations/Recommendations';
import Footer from '../../components/Footer/Footer';

import { getRequestParams, getDataFromAPI } from "../../helpers/utils";

function IndividualMovie({ theme }) {

    const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
    
    // states for data retrieved from API
    const [movieDetails, setMovieDetails] = useState(null);
    const [topCast, setTopCast] = useState(null);

    // getting movie data based on id in params
    const { movieId } = useParams();
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    const topCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    
    // setting the request params for the API endpoints
    const movieDetailsParams = getRequestParams(movieDetailsUrl);
    const topCastParams = getRequestParams(topCastUrl)

    // function below triggers the helper function
    const getMovieDetails = () => getDataFromAPI(movieDetailsParams, setMovieDetails)
    const getTopCast = () => getDataFromAPI(topCastParams, setTopCast)

    // this runs the getData trigger function as useEffect
    useEffect(() => {
        getMovieDetails()
        getTopCast()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!movieDetails || !topCast) {
        return
    };

    return (
        <div className='individual-movie'>
            <MovieHeader movieDetails={movieDetails} />
            <MoviePoster movieDetails={movieDetails} imageBaseUrl={imageBaseUrl} />
            <MovieAdditionalDetails movieDetails={movieDetails} theme={theme} />
            <MovieOverview movieDetails={movieDetails} />
            <TopCast theme={theme} imageBaseUrl={imageBaseUrl} cast={topCast.cast} />
            <MovieDetails movieDetails={movieDetails} crew={topCast.crew} />
            <Recommendations theme={theme} imageBaseUrl={imageBaseUrl} />
            <Footer theme={theme} />
        </div>
    )
}

export default IndividualMovie