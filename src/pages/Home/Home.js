import "./Home.scss";

import { useState, useEffect } from "react";


import Hero from "../../components/Hero/Hero";
import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";
import { getRequestParams, getDataFromAPI } from "../../utils"

export default function Home() {

    const detailsParams = getRequestParams('https://api.themoviedb.org/3/configuration');
    const genreListParams = getRequestParams('https://api.themoviedb.org/3/genre/movie/list?language=en')
    const inTheatresParams = getRequestParams('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
    const popularParams = getRequestParams('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
    const upcomingParams = getRequestParams('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');


    const [details, setDetails] = useState(null);
    const [genreList, setGenreList] = useState(null);
    const [inTheatres, setInTheatres] = useState(null);
    const [popular, setPopular] = useState(null);
    const [upcoming, setUpcoming] = useState(null);

    
    //function below triggers the helper function
    const getDetails = () => getDataFromAPI(detailsParams, setDetails)
    const getGenreList = () => getDataFromAPI(genreListParams, setGenreList)
    const getInTheatres = () => getDataFromAPI(inTheatresParams, setInTheatres)
    const getPopular = () => getDataFromAPI(popularParams, setPopular)
    const getUpcoming = () => getDataFromAPI(upcomingParams, setUpcoming)

    //this runs the getData trigger function as useEffect
    useEffect(()=>{
        getDetails()
        getGenreList()
        getInTheatres()
        getPopular()
        getUpcoming()
    }, [])

    if (!details || !genreList || !inTheatres || !popular || !upcoming) {
        return
    }

    const imagesBaseUrl = `${details.images.secure_base_url}original`;

    return (
        <div className="home">
            <Hero imagesBaseUrl={imagesBaseUrl} movies={inTheatres.results} genreList={genreList}/>
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={popular.results} sectionTitle={"Popular"}/>
            <ListOfMovies imagesBaseUrl={imagesBaseUrl} movies={upcoming.results} sectionTitle={"Upcoming"}/>
        </div>
    )
}