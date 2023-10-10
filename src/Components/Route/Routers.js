import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import UserList from "../User/UserList";
import UserDetails from "../User/UserDetails";
import Dashboard from "../Home/Dashboard";
import ProfileList from "../UserProfile/ProfileList";
import ProfileDetails from "../UserProfile/ProfileDetails";
import GroupList from "../UserGroup/GroupList";
import Registration from "../Login/Registration";
import Logout from "../Login/Logout";
import VarientSidebar from "../Varients/varientSidebar1";
import Varients from "../Varients/varients";
import AddUser from "../User/AddUser";

const Routers = () => {
  return (
    <Routes>
      <Route path="/NHAI" element={<Registration />}></Route>
      <Route path="/NHAI/login" element={<Login />}></Route>
      <Route path="/NHAI/Dashboard" element={<Dashboard />}></Route>
      <Route path="/NHAI/UserList" element={<UserList />}></Route>
      <Route path="/NHAI/AddUser" element={<AddUser />}></Route>
      <Route
        path="/NHAI/UserList/UserDetails/:userId"
        element={<UserDetails />}
      ></Route>
      <Route path="/NHAI/ProfileList" element={<ProfileList />}></Route>
      <Route
        path="/NHAI/ProfileList/ProfileDetails/:userId"
        element={<ProfileDetails />}
      ></Route>
      <Route path="/NHAI/GroupList" element={<GroupList />}></Route>
      <Route path="/NHAI/Logout" element={<Logout />}></Route>
      {/* //--------------------------------------------------------------------------- */}
      <Route path="/NHAI/varients" element={<Varients />}></Route>

      {/* //--------------------------------------------------------------------------- */}
    </Routes>
  );
};
export default Routers;
