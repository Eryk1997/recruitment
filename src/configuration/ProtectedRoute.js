import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";



export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/about", state: { from: props.location } }}
          />
        )
      }
    />
  );