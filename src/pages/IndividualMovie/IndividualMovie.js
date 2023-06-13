import './IndividualMovie.scss';

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import MovieHeader from '../../components/MovieHeader/MovieHeader';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieAdditionalDetails from '../../components/MovieAdditionalDetails/MovieAdditionalDetails';
import MovieOverview from '../../components/MovieOverview/MovieOverview';
import TopCast from '../../components/TopCast/TopCast';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import ListOfMovies from '../../components/ListOfMovies/ListOfMovies';

import { getRequestParams, getDataFromAPI } from "../../helpers/utils";

function IndividualMovie({ theme }) {

    const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
    
    // states for data retrieved from API
    const [movieDetails, setMovieDetails] = useState(null);
    const [topCast, setTopCast] = useState(null);
    const [recommended, setRecommended] = useState(null)

    // getting movie data based on id in params
    const { movieId } = useParams();
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    const topCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    const recommendedUrl = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`
    
    // setting the request params for the API endpoints
    const movieDetailsParams = getRequestParams(movieDetailsUrl);
    const topCastParams = getRequestParams(topCastUrl);
    const recommendedParams = getRequestParams(recommendedUrl);

    // function below triggers the helper function
    const getMovieDetails = () => getDataFromAPI(movieDetailsParams, setMovieDetails);
    const getTopCast = () => getDataFromAPI(topCastParams, setTopCast);
    const getRecommended = () => getDataFromAPI(recommendedParams, setRecommended)

    // this runs the getData trigger function as useEffect
    useEffect(() => {
        getMovieDetails()
        getTopCast()
        getRecommended()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!movieDetails || !topCast || !recommended) {
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
            <ListOfMovies imagesBaseUrl={imageBaseUrl} movies={recommended.results} sectionTitle={"You may also like"} theme={theme} />
        </div>
    )
}

export default IndividualMovie