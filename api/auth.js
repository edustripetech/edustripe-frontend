import { http } from './client';

export const authLogin = async data =>
  await http.post('/auth/sign-in', data);

export const parentSignup = async data =>
  await http.post('/auth/sign-up', data);
