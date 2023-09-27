import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import AdminSidebar from "../../components/AdminSidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader";
import { Wrapper } from "./styled";

const Admin = () => {
  return (
    <Wrapper>
      <AdminNavbar />
      <Wrapper.FlexBoxAdmin>
        <AdminSidebar />
        <Loader>
          <Outlet />
        </Loader>
      </Wrapper.FlexBoxAdmin>
    </Wrapper>
  );
};

export default Admin;
