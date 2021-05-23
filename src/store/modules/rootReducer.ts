import { combineReducers } from 'redux';

import auth from './auth/reducer';
import theme from './theme/reducer';

export default combineReducers({
  auth,
  theme,
});
