import AuthService from '../../services/AuthService';
import { SET_CURRENT_USER, REGISTER_SUCCESS, LOGOUT, SET_ERRORS } from '../types/user-types';
import { enqueueSnackbar } from 'notistack';
import { HttpStatusCode } from 'axios';
import router from '../../router';
import { getCurrentUserByTz } from './user-action';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS
  }
}

export function logoutUser() {
  return {
    type: LOGOUT
  }
}

/**
 * Login user action
 */
export const login = (tz, password) => async dispatch => {

  try {
    const response = await AuthService.login(tz, password);
    if (response.data) {
      const { siteUser, token } = response.data;
      dispatch(setCurrentUser(siteUser))
      AuthService.saveToken(token);
      dispatch(getCurrentUserByTz(tz))
      router.navigate('/home');
    }
  }
  catch (error) {
    enqueueSnackbar(`error: ${error}`, { variant: "error" });
  }
}

export const getAuthorizedUser = () => async dispatch => {
  try {
    const response = await AuthService.getUser();
    if (response.data) {
      dispatch(setCurrentUser(response.data))
    }
    else {
      dispatch(logout);
    }
  }
  catch (error) {
    dispatch(logout);
  }

}

/**
 * Logout action
 */
export const logout = () => dispatch => {
  AuthService.logout();
  dispatch(logoutUser());
  router.navigate('/');
}

/**
 * Register user action
 */
export const register = (data) => async dispatch => {
  try {
    debugger;
    const response = await AuthService.register(data);
    if (response?.status == HttpStatusCode.Ok) {
      dispatch(registerSuccess())
      router.navigate('/login');
    }
    else {
      enqueueSnackbar(`error: ${response.message}`, { variant: "error" });
    }
  }
  catch (error) {
    if (error?.response?.status == 400) {
      enqueueSnackbar(`${error?.response?.data?.message}`, { variant: "error" });
    }
    else {
      enqueueSnackbar(`An unexpected error has occurred`, { variant: "error" });
    }
  }

}