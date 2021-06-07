import axios from "axios";
import React, {
  createContext,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/DashBoard/Admin/Admin";
import LoadingSpinner from "./Components/Home/LoadingSpinner/LoadingSpinner";
import { getDecodedUser } from "./Components/Home/Login/LoginManager";
import PrivateRoute from "./Components/Home/PrivateRoute/PrivateRouter";
const Home = lazy(() => import("./Pages/Home"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Login = lazy(() => import("./Pages/Login"));

export const UserContext = createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState([]);
  const [adminLoading, setAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/isAdmin?email=${loggedInUser?.email}`)
      .then((res) => {
        setIsAdmin(res.data);
        setAdminLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [loggedInUser?.email]);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        isAdmin,
        selectedService,
        setSelectedService,
      }}
    >
      <Router>
        <Toaster />
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute path="/dashboard/:panel">
                <Dashboard adminLoading={adminLoading} />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
