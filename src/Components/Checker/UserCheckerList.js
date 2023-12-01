import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";
const UserCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("userAddRequestDetails");
  const data = [
    {
      id: 1,
      requestName: "Add John Doe",
      requestId: "JD001",
      requestDetails: "Add user in appilication",
    },
    {
      id: 2,
      requestName: "Add Jane Smith",
      requestId: "JS002",
      requestDetails: "Add user in appilication",
    },
    {
      id: 3,
      requestName: "Add Bob Johnson",
      requestId: "BJ003",
      requestDetails: "Add user in appilication",
    },
    {
      id: 4,
      requestName: "Add Alice Brown",
      requestId: "AB004",
      requestDetails: "Add user in appilication",
    },
    {
      id: 5,
      requestName: "Add Eve Anderson",
      requestId: "EA005",
      requestDetails: "Add user in appilication",
    },
  ];
  const updatedData = [
    {
      id: 1,
      requestName: "Update John Doe",
      requestId: "JD001",
      requestDetails: "Update user in appilication",
    },
    {
      id: 2,
      requestName: "Update Jane Smith",
      requestId: "JS002",
      requestDetails: "Update user in appilication",
    },
    {
      id: 3,
      requestName: "Update Bob Johnson",
      requestId: "BJ003",
      requestDetails: "Update user in appilication",
    },
    {
      id: 4,
      requestName: "Update Alice Brown",
      requestId: "AB004",
      requestDetails: "Update user in appilication",
    },
    {
      id: 5,
      requestName: "Update Eve Anderson",
      requestId: "EA005",
      requestDetails: "Update user in appilication",
    },
  ];
  const DeletedData = [
    {
      id: 1,
      requestName: "Delete John Doe",
      requestId: "JD001",
      requestDetails: "Delete user in appilication",
    },
    {
      id: 2,
      requestName: "Delete Jane Smith",
      requestId: "JS002",
      requestDetails: "Delete user in appilication",
    },
    {
      id: 3,
      requestName: "Delete Bob Johnson",
      requestId: "BJ003",
      requestDetails: "Delete user in appilication",
    },
    {
      id: 4,
      requestName: "Delete Alice Brown",
      requestId: "AB004",
      requestDetails: "Delete user in appilication",
    },
    {
      id: 5,
      requestName: "Delete Eve Anderson",
      requestId: "EA005",
      requestDetails: "Delete user in appilication",
    },
  ];
  const [rows, setRows] = useState(data);
  const columns = [
    {
      Header: <div className="float-center">Request Id</div>,
      accessor: "requestId",
    },
    {
      Header: <div className="float-center">Request Name</div>,
      accessor: "requestName",
    },
    {
      Header: <div className="float-center">Request Details</div>,
      accessor: "requestDetails",
    },
    // { Header: <div className="float-center">Role</div>, accessor: "role" },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ row }) => (
        <div className="text-center">
          <button
            className="btn addUser dashbutton"
            type="button"
            onClick={() => {
              navigate(`/NHAI/${action}/${row.id}`);
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">User Requests</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <div className="mb-3">
                {" "}
                <label htmlFor="userName" className="form-label checkerAction">
                  Type :
                </label>{" "}
                <input
                  type="radio"
                  name="request"
                  value="Add"
                  defaultChecked={true}
                  onClick={() => {
                    setRows(data);
                    setAction("userAddRequestDetails");
                  }}
                />
                <label htmlFor="userName" className="form-label checkerAction">
                  Add
                </label>{" "}
                <input
                  type="radio"
                  name="request"
                  value="Update"
                  onClick={() => {
                    setRows(updatedData);
                    setAction("userUpdateRequestDetails");
                  }}
                />
                <label htmlFor="userName" className="form-label checkerAction">
                  Update
                </label>{" "}
                <input
                  type="radio"
                  name="request"
                  value="Delete"
                  onClick={() => {
                    setRows(DeletedData);
                    setAction("userDeleteRequestDetails");
                  }}
                />
                <label htmlFor="userName" className="form-label checkerAction">
                  Delete
                </label>{" "}
              </div>
              <DataTable
                columns={columns}
                data={rows}
                // customClass="ULTable"
                // detailpage="UserDetails"
                // editpage="EditUser"
                //deletepage="DeleteUser"
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCheckerList;
