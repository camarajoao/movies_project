import "./Home.scss";

import Hero from "../../components/Hero/Hero";
import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";

import { useState, useEffect } from "react";
import { getRequestParams, getDataFromAPI } from "../../helpers/utils"

export default function Home({ theme }) {
    // retrieve imagesBaseUrl from local storage
    const imagesBaseUrl = localStorage.getItem('imagesBaseUrl') 

    // states for data retrieved from API
    const [genreList, setGenreList] = useState(null);
    const [inTheatres, setInTheatres] = useState(null);
    const [popular, setPopular] = useState(null);
    const [upcoming, setUpcoming] = useState(null);

    // setting the request params for each of the API endpoints
    const genreListParams = getRequestParams('https://api.themoviedb.org/3/genre/movie/list?language=en')
    const inTheatresParams = getRequestParams('https://api.themoviedb.org/3/movie/now_playing?with_original_language=en&page=1&adult=false')
    const popularParams = getRequestParams('https://api.themoviedb.org/3/movie/popular?with_original_language=en&page=1&adult=false');
    const upcomingParams = getRequestParams('https://api.themoviedb.org/3/movie/upcoming?with_original_language=en&page=1&adult=false');

    // this runs functions to get all necessary data from the API as useEffect
    useEffect(() => {
        getDataFromAPI(genreListParams, setGenreList)
        getDataFromAPI(inTheatresParams, setInTheatres)
        getDataFromAPI(popularParams, setPopular)
        getDataFromAPI(upcomingParams, setUpcoming)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // wait until all requests are fulfilled to render page
    if (!genreList || !inTheatres || !popular || !upcoming) {
        return
    }

    return (
        <div className="home">
            <Hero imagesBaseUrl={imagesBaseUrl} movies={inTheatres.results.slice(0, 6)} genreList={genreList} />
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={inTheatres.results} sectionTitle={"In Theatres"} theme={theme} />
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={popular.results} sectionTitle={"Popular"} theme={theme} />
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={upcoming.results} sectionTitle={"Upcoming"} theme={theme} />
        </div>
    )
}