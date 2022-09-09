import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Row.scss"

function Row({ title, fetchUrl, isPoster }) {

    const baseUrl = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)

            setMovies(request.data.results);
        }

        fetchData()

    }, [fetchUrl]);




    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__images">
                {movies?.map((movie) =>
                (<div key={movie.id}>
                    <Link to={`/video/${movie?.id}`}>
                        <img
                            src={
                                isPoster
                                    ? `${baseUrl}/${movie.poster_path}`
                                    : `${baseUrl}/${movie.backdrop_path}`
                            }
                            className="row__image"
                            alt={movie?.title || movie?.name || movie?.original_title}
                        />
                    </Link>


                </div>
                ))}


            </div>

        </div>
    )
}

export default Row