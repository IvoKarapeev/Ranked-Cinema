import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import * as movieService from './services/movieService';
import { MovieContext } from './contexts/MovieContext';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CatalogMovies from "./components/CatalogMovies/CatalogMovies";
import CreateMovie from './components/CreateMovie/CreateMovie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import EditMovie from './components/EditMovie/EditMovie';


function App() {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll()
            .then(result => {
                setMovies(result)
            });
    },[]);

    const getDetails = (movieId) => {
        return movieService.getDetails(movieId)
            .then(res => res.json());
    };

    return (
        <MovieContext.Provider value={{movies,getDetails}} >
            <div>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/movies" element={<CatalogMovies/>}/>
                        <Route path="/movies/create" element={<CreateMovie/>}/>
                        <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                        <Route path="/movies/edit/:movieId" element={<EditMovie />}/>
                    </Routes>
                </main>
            </div>
        </MovieContext.Provider>
    );
}

export default App;
