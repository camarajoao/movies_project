import "./Home.scss";

import { useState, useEffect } from "react";


import Hero from "../../components/Hero/Hero";
import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";
import Footer from "../../components/Footer/Footer";
import { getRequestParams, getDataFromAPI } from "../../helpers/utils"

export default function Home({ theme }) {
    // states for data retrieved from API
    const [details, setDetails] = useState(null);
    const [genreList, setGenreList] = useState(null);
    const [inTheatres, setInTheatres] = useState(null);
    const [popular, setPopular] = useState(null);
    const [upcoming, setUpcoming] = useState(null);

    // setting the request params for each of the API endpoints
    const detailsParams = getRequestParams('https://api.themoviedb.org/3/configuration');
    const genreListParams = getRequestParams('https://api.themoviedb.org/3/genre/movie/list?language=en')
    const inTheatresParams = getRequestParams('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
    const popularParams = getRequestParams('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
    const upcomingParams = getRequestParams('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');

    // function below triggers the helper function
    const getDetails = () => getDataFromAPI(detailsParams, setDetails)
    const getGenreList = () => getDataFromAPI(genreListParams, setGenreList)
    const getInTheatres = () => getDataFromAPI(inTheatresParams, setInTheatres)
    const getPopular = () => getDataFromAPI(popularParams, setPopular)
    const getUpcoming = () => getDataFromAPI(upcomingParams, setUpcoming)

    // this runs the getData trigger function as useEffect
    useEffect(() => {
        getDetails()
        getGenreList()
        getInTheatres()
        getPopular()
        getUpcoming()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // wait until all requests are fulfilled to render page
    if (!details || !genreList || !inTheatres || !popular || !upcoming) {
        return
    }
    // set the images base url with data from API
    const imagesBaseUrl = `${details.images.secure_base_url}original`;

    return (
        <div className="home">
            <Hero imagesBaseUrl={imagesBaseUrl} movies={inTheatres.results.slice(0, 6)} genreList={genreList} />
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={inTheatres.results} sectionTitle={"In Theatres"} theme={theme} />
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={popular.results} sectionTitle={"Popular"} theme={theme} />
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={upcoming.results} sectionTitle={"Upcoming"} theme={theme} />
            {/* <Footer theme={theme} /> */}
        </div>
    )
}