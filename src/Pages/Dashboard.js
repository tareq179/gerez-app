import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../App";
import DashboardNavbar from "../Components/DashBoard/DashBoardNavBar/DashboardNavbar";
import Sidebar from "../Components/DashBoard/Sidebar/Sidebar";
import "../Components/DashBoard/DashBoard.css";
import Profile from "../Components/DashBoard/Profile/Profile";
import OrderList from "../Components/DashBoard/OrderList/OrderList";
import Admin from "../Components/DashBoard/Admin/Admin";

const Dashboard = ({ adminLoading }) => {
  const {
    loggedInUser: { email },
    isAdmin,
  } = useContext(UserContext);
  const { panel } = useParams();
  const history = useHistory();
  const [showSidebar, setShowSidebar] = useState(false);
  const [loadingReview, setLoadingReview] = useState(true);
  const [review, setReview] = useState({});
  const [reviewEdit, setReviewEdit] = useState(false);

  if (
    !adminLoading &&
    !isAdmin &&
    (panel === "orderList" ||
      panel === "addService" ||
      panel === "admin" ||
      panel === "manageServices")
  ) {
    history.replace({ pathname: "/dashboard/profile" });
  }

  return (
    <main className="wrapper">
      <Sidebar show={showSidebar} adminLoading={adminLoading} />
      <div id="content">
        <DashboardNavbar setShowSidebar={setShowSidebar} show={showSidebar} />
        {panel === "profile" ? (
          <Profile />
        ) : panel === "orderList" && isAdmin ? (
          <OrderList />
        ) : panel === "admin" && isAdmin ? (
          <Admin />
        ) : null}
      </div>
    </main>
  );
};

export default Dashboard;
