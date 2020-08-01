import React from "react";
import AuthContext from "./AuthContext";

const UserInfo = () => (
  <AuthContext.Consumer>
    {({ firstName, lastName, avatarUrl }) => {
      return (
        <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item avatar">
            <a className="nav-link p-0" href="#">
            {firstName && `${firstName} ${lastName} `}
              <img
                src={avatarUrl}
                className="rounded-circle z-depth-0"
                alt={`${firstName} ${lastName}`}
                height="35"
              />
            </a>
          </li>
        </ul>
      );
    }}
  </AuthContext.Consumer>
);

export default UserInfo;
