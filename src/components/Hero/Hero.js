// child of Home page
import './Hero.scss'
import HeroPoster from "../../components/HeroPoster/HeroPoster";
import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";
import TrailerStage from '../TrailerStage/TrailerStage';

import { useState } from "react";


function Hero(props) {

    const [current, setCurrent] = useState(props.movies[0])

    return (
        <>
        <TrailerStage movieId={current.id}/>
        <HeroPoster imagesBaseUrl={props.imagesBaseUrl} movie={current} genreList={props.genreList.genres} />
        <ListOfMovies imagesBaseUrl={props.imagesBaseUrl} movies={props.movies} sectionTitle={"In Theatres"}/>
        </>
    )
}

export default Hero