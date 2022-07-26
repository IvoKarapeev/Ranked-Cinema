import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import * as movieService from './services/movieService';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CatalogMovies from "./components/CatalogMovies/CatalogMovies";
import CreateMovie from './components/CreateMovie/CreateMovie';


function App() {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(result => {
                setMovies(result)
            });
    },[]);

    return (
        <div>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/movies" element={<CatalogMovies movies={movies}/>}/>
                    <Route path="/movies/create" element={<CreateMovie/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
