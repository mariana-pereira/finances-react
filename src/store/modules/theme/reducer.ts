/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { ThemeState, ThemeTypes } from './types';
import light from '../../../styles/themes/light';

const INITIAL_STATE: ThemeState = {
  theme: light,
};

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case ThemeTypes.APPLY_THEME: {
      draft.theme = action.payload.theme;
      break;
    }
    default:
  }
});

export default reducer;
