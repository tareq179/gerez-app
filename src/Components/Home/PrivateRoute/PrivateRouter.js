import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../../App";

const PrivateRouter = ({ children, ...rest }) => {
  const {
    loggedInUser: { isSignedIn },
  } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
