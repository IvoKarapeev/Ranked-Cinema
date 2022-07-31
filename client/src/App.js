import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import * as movieService from './services/movieService';
import { MovieContext } from './contexts/MovieContext';
import { AuthContext } from './contexts/AuthContext';
import PriveteRoute from './components/common/PrivateRoute';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CatalogMovies from "./components/CatalogMovies/CatalogMovies";
import CreateMovie from './components/CreateMovie/CreateMovie';
import MovieDetails from './components/MovieDetails/MovieDetails';
import EditMovie from './components/EditMovie/EditMovie';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import useLocalStorige from './hooks/useLocalStorige';
import Logout from './components/Logout/Logout';
import DeleteMovie from './components/DeleteMovie/DeleteMovie';
import MostLikedMovies from './components/MostLikedMovies.js/MostLikedMovies';
import GuestRoute from './components/common/GuestRoute';
import Profile from './components/Profile/Profile';


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
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    const addMovie = (movieData) => {
        setMovies(state => [
            ...state,
            movieData
        ]);
    };

    const editMovie = (movieId,movieData) => {
        setMovies(state => state.map(x => x._id === movieId ? movieData : x));
    };

    const removeMovie = (movieId) => {
        setMovies(state => state.filter(x => x._id != movieId));
    };

    const getMovieComments = (movieId) => {
        return movieService.getComments(movieId);
    };

    const postMovieComment = (movieId,comment) => {
        return movieService.postComment(movieId,comment);
    };

    return (
        <AuthContext.Provider value={{user:auth,userLogin,userLogout,isAuthenticated: !!auth.AccessToken}}>
            <div>
                <Header />

                <MovieContext.Provider value={{
                    movies,
                    getDetails,
                    addMovie,
                    editMovie,
                    removeMovie,
                    getMovieComments,
                    postMovieComment
                }}>
                    <main>
                        <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="/movies" element={<CatalogMovies/>}/>
                                <Route path="/movies/ranked" element={<MostLikedMovies/>}/>
                                <Route path="/movies/:movieId" element={<MovieDetails/>}/>
                            <Route element={<GuestRoute/>}>
                                <Route path="/register" element={<Register />}/>
                                <Route path="/login" element={<Login />}/>
                            </Route>
                            <Route element ={<PriveteRoute />}>
                                <Route path="/movies/create" element={<CreateMovie/>}/>
                                <Route path="/movies/edit/:movieId" element={<EditMovie />}/>
                                <Route path="/movies/delete/:movieId" element={<DeleteMovie />}/>
                                <Route path="/logout" element={<Logout />}/>
                                <Route path="/profile/user" element={<Profile />}/>
                            </Route>
                        </Routes>
                    </main>
                </MovieContext.Provider>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
