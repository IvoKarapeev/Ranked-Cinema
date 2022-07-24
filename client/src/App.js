import { useState,useEffect } from 'react';

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CatalogMovies from "./components/CatalogMovies/CatalogMovies";


function App() {

    const [movies,setMovies] = useState([]);

    return (
        <div>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/movies" element={<CatalogMovies movies={movies}/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
