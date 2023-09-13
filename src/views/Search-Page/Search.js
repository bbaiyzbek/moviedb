import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import List from "../../components/List";
import Layout from "../../components/Layout";

const Search = () => {
    const [result, setResult] = useState([])
    const [searchParams, setSearchParams ] = useSearchParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?query=${searchParams.get('name')}?language=ru-RUS&api_key=ee3003f86270ce61a124c2ed5663c778`)
            .then(res => setResult(res.data.results))
    }, [searchParams])
    return (
        <Layout>
            <div className="container" style={{minHeight: '100vh'}}>
                    <List movies={result}/>
            </div>
        </Layout>
    );
};

export default Search;