import React from "react";
import { Link } from "react-router-dom";
import { Navbar, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Header({ isSignedIn }, props) {
  const { location } = props;
  if (window.location.pathname.match(/signin/) || window.location.pathname.match(/logout/) || window.location.pathname.match(/signup/)) {
    return null && window.location.reload();
  }

  return (
    <Navbar variant="light" expand="lg" className="p-4">
      <Navbar.Brand as={Link} to={isSignedIn ? "/" : "/signin"} className="text-white d-flex align-items-center">
        <img src={require("./assets/logo.png")} width="250px" alt="logo" />
      </Navbar.Brand>
      <ListGroup horizontal className="ml-auto">

          <React.Fragment>
            <ListGroup.Item action as={Link} to="/" className="text-nowrap iconsBtn">
              <FontAwesomeIcon icon={faHome} className="icons" />
            </ListGroup.Item>
            <ListGroup.Item action as={Link} to="/settings" className="text-nowrap iconsBtn">
              <FontAwesomeIcon icon={faCog} className="icons" />
            </ListGroup.Item>
          </React.Fragment>

        <ListGroup.Item action as={Link} to="/signin" className="text-nowrap iconsBtn">
          <FontAwesomeIcon icon={faSignOutAlt} className="icons" />
        </ListGroup.Item>
      </ListGroup>
    </Navbar>
  );
}

export default Header;
