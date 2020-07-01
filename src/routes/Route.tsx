import React from 'react';
import {
  Route, Redirect, RouteProps, useLocation,
} from 'react-router-dom';

import store from '../store';

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const location = useLocation();
  const { signed } = store.getState().auth;

  return (
    <Route
      {...rest}
      render={() => (
        (!!signed === isPrivate
          ? (
            <Component />
          )
          : (
            <Redirect
              to={{
                pathname: isPrivate
                  ? '/login'
                  : '/',
                state: { from: location },
              }}
            />
          )
        )
      )}
    />
  );
};

export default RouteWrapper;
