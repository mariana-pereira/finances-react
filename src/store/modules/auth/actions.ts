/* eslint-disable implicit-arrow-linebreak */
import { action } from 'typesafe-actions';
import { AuthTypes, Credentials } from './types';

export const signInRequest = (credentials: Credentials) =>
  action(AuthTypes.SIGN_IN_REQUEST, credentials);

export const sigUpRequest = (credentials: Credentials) =>
  action(AuthTypes.SIGN_UP_REQUEST, credentials);

export const signInSuccess = (token: string) =>
  action(AuthTypes.SIGN_IN_SUCCESS, token);

export const signUpSuccess = () => action(AuthTypes.SIGN_IN_FAILURE);

export const signFailure = () => action(AuthTypes.SIGN_IN_FAILURE);
