import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      fullName: "John Doe",
      userId: "JD001",
      userType: "Admin",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "Administrator",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
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
    {
      id: 6,
      fullName: "Tom Wilson",
      userId: "TW006",
      userType: "User",
      role: "Guest",
      isActive: true,
    },
    {
      id: 7,
      fullName: "Laura Lee",
      userId: "LL007",
      userType: "User",
      role: "Guest",
      isActive: true,
    },
    {
      id: 8,
      fullName: "Michael Johnson",
      userId: "MJ008",
      userType: "User",
      role: "Member",
      isActive: false,
    },
    {
      id: 9,
      fullName: "Olivia Brown",
      userId: "OB009",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 10,
      fullName: "William Lee",
      userId: "WL010",
      userType: "User",
      role: "Member",
      isActive: true,
    },
  ];
  const user = users.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const isDelete = path.includes("DeleteUser") ? true : false;
  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">
              {isDelete ? "Delete User" : "User Details"}
            </h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          {isDelete ? (
            <h4 className="mb-4 mx-5">
              Are you sure you want to delete this ?
            </h4>
          ) : (
            ""
          )}
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>User Full Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.fullName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>User Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userType}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>User Domain Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.domainName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Gender:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.gender}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Mobile Number:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.mobileNumber}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Is Active:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {/* {user.isActive ? "Yes" : "No"} */}
              <input
                name="isActive"
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                //style={{ width: "30px", height: "30px" }}
                checked={user.isActive}
                readOnly
              />
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.createdDate}</div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            <div className="col-md-6 UDCoulmns">
              <strong>User ID:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userId}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Employee Number:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.employeeNumber}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Role:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.userRole}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>EMail:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.email}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Work Phone:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.workNo}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.createdBy}</div>
          </div>
        </div>

        <div className="row">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/Users");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser"
              type="button"
              onClick={() => {
                //setIsOpen(true);
                navigate(
                  `/NHAI/${isDelete ? "DeleteUser" : "EditUser"}/${user.id}`
                );
              }}
            >
              {isDelete ? "Delete" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
