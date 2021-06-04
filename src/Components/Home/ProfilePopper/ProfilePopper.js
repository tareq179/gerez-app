import React, { useContext } from "react";
import { Image, Nav, OverlayTrigger, Popover } from "react-bootstrap";
import toast from "react-hot-toast";
import { UserContext } from "../../../App";
import { handleSignOut, initializeLoginFramework } from "../Login/LoginManager";

const ProfilePopper = () => {
  const {
    loggedInUser: { name, email, photo },
    setLoggedInUser,
  } = useContext(UserContext);

  const signOut = () => {
    initializeLoginFramework();
    handleSignOut().then((res) => {
      setLoggedInUser(res);
      toast.error("Logged Out!");
    });
  };

  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      key="bottom"
      overlay={
        <Popover id="popover-positioned-bottom">
          <div className="d-flex justify-content-center mt-1">
            <Image style={{ maxWidth: "60px" }} src={photo} roundedCircle />
          </div>
          <Popover.Content>
            <strong className="text-center d-block">{name}</strong>
            <strong className="text-center d-block">{email}</strong>
            <div className="d-flex justify-content mt-1">
              <button
                onClick={signOut}
                variant="outline-danger"
                className="py-0 px-1"
                size="sm"
              >
                Logout
              </button>
            </div>
          </Popover.Content>
        </Popover>
      }
    >
      <Nav.Link className="p-0">
        <Image
          src={photo}
          Width="40"
          height="40"
          roundedCircle
          className="d-inline-block align-top"
          alt="Profile"
        />
        ;
      </Nav.Link>
    </OverlayTrigger>
  );
};

export default ProfilePopper;
