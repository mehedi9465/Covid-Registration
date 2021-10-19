import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Custom hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, status } = useAuth();
    if(status){
        return <Spinner className='d-block mx-auto mt-5' animation="border" variant="danger" />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;