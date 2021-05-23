import reducer, { INITIAL_STATE } from '../../../store/modules/auth/reducer';

import * as authActions from '../../../store/modules/auth/actions';

const data = {
  email: 'test@test.com',
  password: '123123',
};

describe('Auth reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual(INITIAL_STATE);
  });

  it('SIGN_IN_REQUEST', () => {
    const state = reducer(INITIAL_STATE, authActions.signInRequest(data));

    expect(state.loading).toStrictEqual(true);
  });

  it('SIGN_IN_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, authActions.signInSuccess('some-token'));

    expect(state.signed).toStrictEqual(true);
  });

  it('SIGN_UP_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, authActions.signUpSuccess());

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('SIGN_IN_FAILURE', () => {
    const state = reducer(INITIAL_STATE, authActions.signFailure());

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});
