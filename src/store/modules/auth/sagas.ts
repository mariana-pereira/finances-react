import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { SignInRequestAction, SignUpRequestAction, AuthTypes } from './types';
import { signInSuccess, signFailure } from './actions';

export function* signIn(action: SignInRequestAction) {
  try {
    const { email, password } = action.payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    yield put(signInSuccess(token));
    history.push('/');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export function* SignUp(action: SignUpRequestAction) {
  try {
    const { name, email, password } = action.payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/login');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados.');
    yield put(signFailure());
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, SignUp),
]);
