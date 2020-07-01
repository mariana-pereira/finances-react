import { User } from '../user/types';

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE'
}

export interface SignInRequestAction {
  type: typeof AuthTypes.SIGN_IN_REQUEST;
  payload: Credentials;
}

export interface SignInSuccessAction {
  type: typeof AuthTypes.SIGN_IN_SUCCESS;
  payload: {
    token: string;
    user: User;
  }
}

export interface SignFailureAction {
  type: typeof AuthTypes.SIGN_IN_FAILURE
}

export interface Credentials {
  name?: string;
  email: string;
  password: string;
}

export interface AuthState {
  readonly token: string;
  readonly signed: boolean;
  readonly loading: boolean;
}
