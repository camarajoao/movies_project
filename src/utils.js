import axios from 'axios'

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