import * as requester from '../services/requester';

const baseUrl = 'http://localhost:3030/movies';

export const getAll = () => requester.get(baseUrl);

export const getDetails = (movieId) => requester.get(`${baseUrl}/${movieId}`)

export const create = (movieData) => requester.post(baseUrl,movieData);

export const edit = (movieId,movieData) => requester.put(`${baseUrl}/${movieId}`,movieData);

export const del = (movieId) => requester.del(`${baseUrl}/${movieId}`);

