import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="FlexBoxAdmin">
        <AdminSidebar />
        <Loader>
          <Outlet />
        </Loader>
      </div>
    </div>
  );
};

export default Admin;
