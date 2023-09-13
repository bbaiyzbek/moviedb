import React from 'react';
import {Link} from "react-router-dom";

const List = ({movies}) => {
    return (
        <div>
            <div className={'row'}>
                {
                    movies.map((movie, idx) => {
                        return(
                            <div className={'col-3'} key={idx}>
                                    <Link to={`/info/${movie.id}`}>
                                        <div className="box">
                                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default List;