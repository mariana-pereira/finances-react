import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../services/api';

import * as authActions from '../../../store/modules/auth/actions';
import { signIn } from '../../../store/modules/auth/sagas';

const apiMock = new MockAdapter(api);

const action = {
  type: '@auth/SIGN_IN_REQUEST',
  payload: {
    email: 'test@test.com',
    password: '123',
  },
};

describe('Auth saga', () => {
  it('should be able to sign in', async () => {
    const dispatch = jest.fn();

    apiMock.onPost('sessions').reply(200, { token: 'bearer 123456' });

    await runSaga({ dispatch }, signIn, action).toPromise();

    expect(dispatch).toHaveBeenCalledWith(authActions.signInSuccess('bearer 123456'));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onPost('sessions').reply(500);

    await runSaga({ dispatch }, signIn, action).toPromise();

    expect(dispatch).toHaveBeenCalledWith(authActions.signFailure());
  });
});
