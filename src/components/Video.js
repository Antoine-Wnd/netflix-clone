import React, { useEffect, useState } from 'react'
import requests from '../config/requests';

import "./Video.scss"
import SignalWifiConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiConnectedNoInternet4';
import axios from 'axios';

function Video() {

    const [movie, setMovie] = useState([]);




    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData();

    }, []);



    return (
        <div className='video'>
            <div className="video__container">
                <h1 className="video__title">{movie?.title || movie?.name || movie?.original_title}</h1>
                <a href="/" className="video__error"><SignalWifiConnectedNoInternet4Icon /></a>
            </div>
        </div>
    )


}

export default Video