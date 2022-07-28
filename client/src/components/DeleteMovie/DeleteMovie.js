import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";

import * as movieService from '../../services/movieService';

const DeleteMovie = () => {

    const navigate = useNavigate();
    const { movieId } = useParams();
    const { removeMovie } = useContext(MovieContext);

    movieService.del(movieId)
        .then(res => {
            removeMovie(movieId);
            navigate('/movies');
        });

    return null;
};

export default DeleteMovie;