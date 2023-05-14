// Admin.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import AdminChild from "./AdminChild";

const Admin = () => {
  return (
    <div>
      <h2>Admin</h2>
    
      <nav>
        <ul>
          <li>
            <Link to="/admin/child">Admin Child</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/admin/child">
          <AdminChild />
        </Route>
      </Routes>
    </div>
  );
};

export default Admin;
