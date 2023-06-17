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
    // retrieve imagesBaseUrl from local storage
    const imagesBaseUrl = localStorage.getItem('imagesBaseUrl')
    
    // states for data retrieved from API
    const [movieDetails, setMovieDetails] = useState(null);
    const [topCast, setTopCast] = useState(null);
    const [recommended, setRecommended] = useState(null)

    // getting movie data based on id in params
    const { movieId } = useParams();
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en`
    const topCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en`
    const recommendedUrl = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en&page=1&adult=false`
    
    // setting the request params for the API endpoints
    const movieDetailsParams = getRequestParams(movieDetailsUrl);
    const topCastParams = getRequestParams(topCastUrl);
    const recommendedParams = getRequestParams(recommendedUrl);

    // this runs functions to get all necessary data from the API as useEffect
    useEffect(() => {
        getDataFromAPI(movieDetailsParams, setMovieDetails);
        getDataFromAPI(topCastParams, setTopCast);
        getDataFromAPI(recommendedParams, setRecommended)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!movieDetails || !topCast || !recommended) {
        return
    };

    const recommendationList = recommended.results.filter(movie => movie.adult === false && movie.original_language === "en" && movie.poster_path);

    return (
        <div className='individual-movie'>
            <MovieHeader movieDetails={movieDetails} />
            <MoviePoster movieDetails={movieDetails} imageBaseUrl={imagesBaseUrl} />
            <MovieAdditionalDetails movieDetails={movieDetails} theme={theme} />
            <MovieOverview movieDetails={movieDetails} />
            <TopCast theme={theme} imageBaseUrl={imagesBaseUrl} cast={topCast.cast} />
            <MovieDetails movieDetails={movieDetails} crew={topCast.crew} />
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={recommendationList} sectionTitle={"You may also like"} theme={theme} />
        </div>
    )
}

export default IndividualMovie