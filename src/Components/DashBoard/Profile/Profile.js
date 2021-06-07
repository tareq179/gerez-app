import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { UserContext } from "../../../App";
import {
  handleSignOut,
  initializeLoginFramework,
} from "../../Home/Login/LoginManager";

const Profile = () => {
  const {
    loggedInUser: { name, email, photo },
    setLoggedInUser,
  } = useContext(UserContext);

  const signOut = () => {
    initializeLoginFramework();
    handleSignOut().then((res) => {
      setLoggedInUser(res);
      toast.error("Logged out!");
    });
  };

  return (
    <Container style={{ maxWidth: "30rem" }}>
      <Card className="border-0 shadow">
        <Card.Header as={"h4"} className="text-center border=0 mt-1">
          Profile
        </Card.Header>
        <Card.Body className="card-body">
          <div className="d-flex flex-colum aline-items-center text0">
            <img
              src={photo}
              alt="Admin"
              className="rounded-circle"
              width="150px"
            />
            <div className="mt-3">
              <h4>{name}</h4>
              <p className="text-secondary mb-1">{email}</p>
            </div>
            <button onClick={signOut} className="px-4 logout-btn btn-main">
              Logout
            </button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
