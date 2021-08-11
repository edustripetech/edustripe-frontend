import jwt from 'jsonwebtoken';

import config from '../config';

export const decodeToken = () => jwt.decode(getToken());

export const setToken = token => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem('token', token);
    
    }
  return getToken();
};

export const getToken = () => {
  if (typeof window !== "undefined") {

    localStorage.getItem("token")
    
    }
}

export const destroyToken = () => {
  window.localStorage.removeItem('token');
  return null;
};

export const encodeUserObject = (user, expiresIn = '30days') => {
  const encodedUser = jwt.sign(user, config.SECRET_KEY, { expiresIn });
  return window.localStorage.setItem('encodedUser', encodedUser);
};

export const getEncodedUser = () => {
  const encodedUser = window.localStorage.getItem('encodedUser');
  return decodeToken(encodedUser);
};

export const destroyEncodedUser = () => {
  window.localStorage.removeItem('encodedUser');
  return null;
};

export const setRedirectUrl = url => window.localStorage.setItem('redirectUrl', url);
export const removeRedirectUrl = () => window.ocalStorage.removeItem('redirectUrl');

export const logout = () => {
  destroyToken();
  destroyEncodedUser();
  removeRedirectUrl();
  window.location.assign('/login');
};
