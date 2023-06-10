import axios from 'axios'

// Function that receives an url and returns an object with the request params for the tmdb API.
export function getRequestParams(url) {
    return {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_BEARER_KEY
        }
    }
}

// Function that receives an object with the request params for the tmdb API and a function to set the state 
// of a variable that will keep track of the states for data retrieved from API. It makes the request and uses 
// the setData function to set the response data to the respective variable.
export async function getDataFromAPI(params, setData) {
    return await axios
    .request(params)
    .then ((res) => {
        if(res.status === 200){
            setData(res.data)
        return {
            status: res.status,
            data: res.data
        }
    }
    })
    .catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}

// Function that receives movieId and a function to set the state of a variable that will keep track of the states for data
// retrieved from API. It makes the request and uses the setData function to set the response data to the respective variable.
export async function getTrailerUrl(movieId, setData) {
    // request url -> use movie ID from args
    const reqUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
    // setting the request params for each of the API endpoints
    const trailerParams = getRequestParams(reqUrl);

    return await axios
    .request(trailerParams)
    .then((res) => {
        if(res.status === 200){
            // try to find a official trailer
            const officialTrailer = res.data.results.find(trailer => trailer.name.includes("Official Trailer"))
            // set displayed trailer as the official, if one was found, or the latest movie trailer in the API results list
            const displayedTrailer = officialTrailer ? officialTrailer : res.data.results[res.data.results.length - 1]
            // set youtube url
            setData(`https://www.youtube.com/embed/${displayedTrailer.key}`)
    }
    })
    .catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}


//Function that receives author.tag and create object with icons and links for all author's socials.
export function getSocials(author, color) {
    const authors = require('../data/authors.json');
    const authorData = authors.find(a => a.tag === author);
    const socials = [];
    for (let key in authorData.socials) {
        let socialIcon = require(`../assets/icons/${key}-${color}.svg`);
        let socialLink = authorData.socials[key]
        let social = { icon: socialIcon, link: socialLink, alt: `${key} logo in ${color}` };
        socials.push(social);
    }
    return socials;
}

// Function that converts a total of minutes to a string with the hours and minutes.
export function timeConvert(totalMinutes) {
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
}



