import { Reducer } from 'redux';
import { AuthState } from './types';

const INITIAL_STATE: AuthState = {
  token: '',
  signed: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
