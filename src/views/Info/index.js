import React, {useEffect, useState} from 'react';
import {Link,  useParams} from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout";
import './style.css'

const MovieInfo = () => {
    const [movie, setMovie] = useState({})
    const [actors, setActors] = useState([])
    const params = useParams()
    const [video, setVideo] = useState({})

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${params.id}?language=ru-RUS&api_key=ee3003f86270ce61a124c2ed5663c778`)
            .then(res => setMovie(res.data))
        axios(`https://api.themoviedb.org/3/movie/${params.id}/credits?language=ru-RUS&api_key=ee3003f86270ce61a124c2ed5663c778`)
            .then(res => setActors(res.data.cast))
        axios(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=ru-RUS&api_key=ee3003f86270ce61a124c2ed5663c778`)
            .then(res => setVideo(res.data.results[0]))
    }, [params.id])

        return (
            <Layout>
                <div className={'bg-img'} style={{
                    background: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path}) center/cover no-repeat`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'

                }}>
                    <div className={'image-filter'}></div>
                    <div className="container" style={{
                        minHeight: '100vh',
                        position: 'relative',
                        zIndex: 4
                    }}>
                        <div className={'info-wrapper'}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                            </div>
                            <div className={'info'}>
                                <h1>«{movie.title}»</h1>
                                <h3>Рейтинг: <span>&#9733;</span>{movie.vote_average}</h3>
                                <h3>Дата релиза: {movie.release_date}</h3>
                                <h3>Оригинальное название: «{movie.original_title}»</h3>
                                <h3>Описание: </h3>
                                <p>{movie.overview}</p>
                                { video.key &&
                                    <div className={'youtube'}>
                                        <a className={'youtube'} href={`https://www.youtube.com/watch?v=${video.key}`}>Посмотреть трейлер</a>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="row cast-row">
                            {
                                actors.slice(0, 8).map((actor, idx) => {
                                    return(
                                        <div className={'col-2'} key={idx}>
                                            <Link to={`/person/${actor.id}`}>
                                                    <div  className={'actors'} >
                                                        <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt=""/>
                                                        <h4>{actor.name}</h4>
                                                        <p>{actor.character}</p>
                                                    </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        );
}

export default MovieInfo;