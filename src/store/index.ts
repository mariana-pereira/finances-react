import {
  createStore, applyMiddleware, Store, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthState } from './modules/auth/types';
import { ThemeState } from './modules/theme/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistConfig = {
  key: 'finances-app',
  storage,
  whitelist: ['auth', 'theme'],
};

export interface ApplicationState {
  auth: AuthState;
  theme: ThemeState;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  composeEhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
