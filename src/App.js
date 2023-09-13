import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./views/Home-Page";
import Search from "./views/Search-Page/Search";
import MovieInfo from "./views/Info";
import MovieCredits from "./views/MovieCredits/MovieCredits";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/info/:id" element={<MovieInfo/>}/>
            <Route path="/person/:id" element={<MovieCredits/>}/>
        </Routes>
    );
}

export default App;
