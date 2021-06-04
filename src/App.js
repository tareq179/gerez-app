import React, { createContext, lazy, Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingSpinner from "./Components/Home/LoadingSpinner/LoadingSpinner";
import { getDecodedUser } from "./Components/Home/Login/LoginManager";
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));

export const UserContext = createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  return (
    <UserContext.Provider value={(loggedInUser, setLoggedInUser)}>
      <Router>
        <Toaster />
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
