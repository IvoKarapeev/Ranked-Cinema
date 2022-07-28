import * as request from './requester';

const baseUrl = 'http://localhost:3030/user';

export const login = (username,password) => 
    request.post(`${baseUrl}/login`, { username, password });

export const register = (firstName,secondName,username,password) => 
    request.post(`${baseUrl}/register`, { firstName,secondName,username,password });
