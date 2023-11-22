import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      fullName: "John Doe",
      userId: "JD001",
      userType: "Admin",
      role: "Admin",
      isActive: true,
    },
    {
      id: 2,
      fullName: "Jane Smith",
      userId: "JS002",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 3,
      fullName: "Bob Johnson",
      userId: "BJ003",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 4,
      fullName: "Alice Brown",
      userId: "AB004",
      userType: "User",
      role: "Member",
      isActive: false,
    },
    {
      id: 5,
      fullName: "Eve Anderson",
      userId: "EA005",
      userType: "User",
      role: "Guest",
      isActive: false,
    },
  ];

  const columns = [
    {
      Header: <div className="float-center">User Full Name</div>,
      accessor: "fullName",
    },
    { Header: <div className="float-center">User ID</div>, accessor: "userId" },
    {
      Header: <div className="float-center">User Type</div>,
      accessor: "userType",
    },
    { Header: <div className="float-center">Role</div>, accessor: "role" },
    {
      Header: "Is Active",
      accessor: "isActive",
    },
    {
      Header: "Action",
      accessor: "id",
    },
  ];

  function handleAction(id) {
    // Implement your action logic here based on the id
  }

  const HandleAddUser = () => {
    navigate("../NHAI/AddUser");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">User Listing</h2>
              <div className="addUserBtnDiv  mt-3">
                <button
                  className="btn addUser"
                  type="button"
                  onClick={HandleAddUser}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                  Add New User
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2">
              {/* <div className="col-md-11 mx-auto flex"> */}
              <DataTable
                columns={columns}
                data={data}
                // customClass="ULTable"
                detailpage="UserDetails"
                editpage="EditUser"
                deletepage="DeleteUser"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
