const baseUrl = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseUrl}/movies/`)
        .then(res => res.json());
};

export const getDetails = (movieId) => {
    return fetch(`${baseUrl}/movies/${movieId}`);
}