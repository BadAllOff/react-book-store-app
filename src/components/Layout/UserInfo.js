import React, { useContext } from "react";
import AuthContext from "../meta/AuthContext";
import Nav from "react-bootstrap/Nav";

const UserInfo = () => {
  const u = useContext(AuthContext);
  return (
    <Nav className="ml-auto nav-flex-icons">
        <Nav.Link href="#">
          {u.firstName && `${u.firstName} ${u.lastName} `}
          <img
            src={u.avatarUrl}
            className="rounded-circle z-depth-0"
            alt={`${u.firstName} ${u.lastName}`}
            height="35"
          />
        </Nav.Link >
    </Nav>
  );
};

export default UserInfo;
