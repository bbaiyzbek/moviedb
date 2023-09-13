import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Layout from "../../components/Layout";
import List from "../../components/List";

const MovieCredits = () => {
    const [credits, setCredits] = useState([])
    const params = useParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${params.id}/movie_credits?language=ru-RUS&api_key=ee3003f86270ce61a124c2ed5663c778`)
            .then(res => setCredits(res.data.cast))
    }, [params.id])
    return (
        <Layout>
            <div className="container">
                <List movies={credits}/>
            </div>
        </Layout>
    );
};

export default MovieCredits;