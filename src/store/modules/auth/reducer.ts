/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';

import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  token: '',
  signed: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS: {
      draft.token = action.payload.token;
      draft.signed = true;
      break;
    }
    default:
  }
});

export default reducer;
