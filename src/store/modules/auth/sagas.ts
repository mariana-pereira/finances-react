import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { SignInRequestAction, AuthTypes } from './types';
import { signInSuccess } from './actions';

export function* signIn(action: SignInRequestAction) {
  try {
    const { email, password } = action.payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    yield put(signInSuccess(token));
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
]);
