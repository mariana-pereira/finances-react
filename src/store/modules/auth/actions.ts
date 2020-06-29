import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const authRequest = () => action(AuthTypes.AUTH_REQUEST);
