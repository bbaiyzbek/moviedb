import React, {useEffect, useState} from 'react';
import axios from "axios";
import Layout from "../../components/Layout";
import List from "../../components/List";
const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/popular?language=ru-RUS&api_key=ee3003f86270ce61a124c2ed5663c778`)
            .then(res => setMovies(res.data.results))
    },[])

    return (
        <Layout>
           <div className="container">
               <List movies={movies}/>
           </div>
        </Layout>
    );
};

export default HomePage;