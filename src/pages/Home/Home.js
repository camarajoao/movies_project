import "./Home.scss";

import { useState, useEffect } from "react";

import axios from 'axios';

import Hero from "../../components/Hero/Hero";
import HeroPoster from "../../components/HeroPoster/HeroPoster";
import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";

export default function Home() {

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/configuration',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    const genres = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    };

    const [details, setDetails] = useState(null);
    const [genreList, setGenreList] = useState(null);

    useEffect(() => {
        axios
            .request(options)
            .then((response) => {
                setDetails(response.data);
            })
            .catch(function (error) {
                console.error(error);
            })
    }, []);

    useEffect(() => {
        axios
            .request(genres)
            .then((response) => {
                setGenreList(response.data.genres);
            })
            .catch(function (error) {
                console.error(error);
            })
    }, []);

    if (!details || !genreList) {
        return
    }

    const baseUrl = `${details.images.secure_base_url}original`;
    const inTheatresRequestUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const popularRequestUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const upcomingRequestUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

    return (
        <div className="home">
            <Hero />
            <HeroPoster baseUrl={baseUrl} requestUrl={inTheatresRequestUrl} genreList={genreList} />
            <ListOfMovies baseUrl={baseUrl} requestUrl={inTheatresRequestUrl} sectionTitle={"In Theatres"}/>
            <ListOfMovies baseUrl={baseUrl} requestUrl={popularRequestUrl} sectionTitle={"Popular"}/>
            <ListOfMovies baseUrl={baseUrl} requestUrl={upcomingRequestUrl} sectionTitle={"Upcoming"}/>
        </div>
    )
}