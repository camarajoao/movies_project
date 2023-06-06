import './IndividualMovie.scss';

import { useState, useEffect } from "react";

import axios from 'axios';

import MovieHeader from '../../components/MovieHeader/MovieHeader';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieAdditionalDetails from '../../components/MovieAdditionalDetails/MovieAdditionalDetails';
import MovieOverview from '../../components/MovieOverview/MovieOverview';
import TopCast from '../../components/TopCast/TopCast';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Recommendations from '../../components/Recommendations/Recommendations';
import Footer from '../../components/Footer/Footer';

function IndividualMovie({ theme }) {

    const movieUrl = 'https://image.tmdb.org/t/p/original'

    const movieDetails = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/569094?language=en-US',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    const topCast = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/569094/credits?language=en-US',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    const [movieDetailsRequest, setMovieDetailsRequest] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const [crew, setCrew] = useState(null);

    useEffect(() => {
        axios
            .request(movieDetails)
            .then(function (response) {
                setMovieDetailsRequest(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios
            .request(topCast)
            .then(function (response) {
                setProfilePic(response.data.cast);
                setCrew(response.data.crew)
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    if (!movieDetailsRequest || !profilePic || !crew) {
        return
    };

    // console.log(crew);

    return (
        <div className='individual-movie'>
            <MovieHeader movieDetailsRequest={movieDetailsRequest} />
            <MoviePoster movieDetailsRequest={movieDetailsRequest} movieUrl={movieUrl} />
            <MovieAdditionalDetails movieDetailsRequest={movieDetailsRequest} theme={theme} />
            <MovieOverview movieDetailsRequest={movieDetailsRequest} />
            <TopCast theme={theme} movieUrl={movieUrl} profilePic={profilePic} />
            <MovieDetails movieDetailsRequest={movieDetailsRequest} crew={crew} />
            <Recommendations theme={theme} movieUrl={movieUrl} />
            <Footer theme={theme} />
        </div>
    )
}

export default IndividualMovie