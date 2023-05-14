// User.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import UserChild from "./UserChild";

const User = () => {
  return (
    <div>
      <h2>User</h2>
     
      <nav>
        <ul>
          <li>
            <Link to="/user/child">User Child</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/user/child">
          <UserChild />
        </Route>
      </Routes>
    </div>
  );
};

export default User;
