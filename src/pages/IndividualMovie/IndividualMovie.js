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
    const imagesBaseUrl = localStorage.getItem('imagesBaseUrl');
    
    // states for data retrieved from API
    const [movieDetails, setMovieDetails] = useState(null);
    const [topCast, setTopCast] = useState(null);
    const [recommended, setRecommended] = useState(null);
    const [popular, setPopular] = useState(null);

    // getting movie data based on id in params
    const { movieId } = useParams();
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en`;
    const topCastUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en`;
    const recommendedUrl = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en&page=1&adult=false`;
    
    // setting the request params for the API endpoints
    const movieDetailsParams = getRequestParams(movieDetailsUrl);
    const topCastParams = getRequestParams(topCastUrl);
    const recommendedParams = getRequestParams(recommendedUrl);
    const popularParams = getRequestParams('https://api.themoviedb.org/3/movie/popular?with_original_language=en&page=1&adult=false');

    // this runs functions to get all necessary data from the API as useEffect
    useEffect(() => {
        getDataFromAPI(movieDetailsParams, setMovieDetails);
        getDataFromAPI(topCastParams, setTopCast);
        getDataFromAPI(recommendedParams, setRecommended);
        getDataFromAPI(popularParams, setPopular);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!movieDetails || !topCast || !recommended || !popular) {
        return
    };

    let recommendationList = recommended.results.filter(movie => movie.adult === false && movie.original_language === "en" && movie.poster_path && movie.backdrop_path);

    if(recommendationList.length <=0) {
        const genres = movieDetails.genres.map(genre => genre.id).slice(0,2);
        const [moreRelevant, others] = popular.results.reduce((result, movie) =>
            {
                result[genres.some(id => movie.genre_ids.includes(id)) ? 0 : 1].push(movie);
                return result;
            },
        [[], []]);
        recommendationList = moreRelevant.concat(others);
    }

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