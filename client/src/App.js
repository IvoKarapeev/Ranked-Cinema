import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import * as movieService from './services/movieService';
import { MovieContext } from './contexts/MovieContext';
import { AuthContext } from './contexts/AuthContext';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CatalogMovies from "./components/CatalogMovies/CatalogMovies";
import CreateMovie from './components/CreateMovie/CreateMovie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import EditMovie from './components/EditMovie/EditMovie';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import useLocalStorige from './hooks/useLocalStorige';


function App() {

    const [movies,setMovies] = useState([]);
    const [auth,setAuth] = useLocalStorige('auth',{});

    useEffect(() => {
        movieService.getAll()
            .then(result => {
                setMovies(result)
            });
    },[]);

    const getDetails = (movieId) => {
        return movieService.getDetails(movieId)
    };

    const userLogin = (authData) => {
        setAuth(authData)
    };

    return (
        <AuthContext.Provider value={{user:auth,userLogin}}>
            <div>
                <Header />

                <MovieContext.Provider value={{movies,getDetails}} >
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/movies" element={<CatalogMovies/>}/>
                            <Route path="/movies/create" element={<CreateMovie/>}/>
                            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                            <Route path="/movies/edit/:movieId" element={<EditMovie />}/>
                            <Route path="/register" element={<Register />}/>
                            <Route path="/login" element={<Login />}/>
                        </Routes>
                    </main>
                </MovieContext.Provider>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
