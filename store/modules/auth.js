import { toast } from 'react-toastify';

import { authLogin } from '../../api/auth';
import { setToken, encodeUserObject } from '../../api/helpers';
import { http } from '../../api/client';

export const REQUEST_PROCESS = 'REQUEST_PROCESS';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const login = (userPayload, history) => async dispatch => {
  try {
    dispatch({ type: REQUEST_PROCESS });
    const {
      data: { user, token },
    } = await authLogin(userPayload);
    setToken(token);
    http.defaults.headers.Authorization = `Bearer ${token}`;
    encodeUserObject(user);
    await dispatch({ type: REQUEST_SUCCESS, payload: user });
    history.push('/');
  } catch (error) {
    if (error.response) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
        closeButton: false,
        hideProgressBar: true,
      });
    } else {
      toast.error(`An error occured`, {
        position: toast.POSITION.TOP_CENTER,
        closeButton: false,
        hideProgressBar: true,
      });
    }
    dispatch({ type: REQUEST_ERROR, payload: error.response.data });
  }
};

export const DEFAULT_STATE = {
  user: {},
  isLoading: false,
  error: {},
  status: undefined,
};

export const authReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case REQUEST_PROCESS:
      return {
        ...state,
        isLoading: true,
        status: 'loading',
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: 'success',
        user: payload,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        status: 'error',
        error: payload,
      };
    default:
      return state;
  }
};
