import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      id: 1,
      profileName: "Admin",
      profileDescription: "Admin Profile",
      isActive: true,
    },
    {
      id: 2,
      profileName: "PD",
      profileDescription: "PD Profile",
      isActive: true,
    },
    {
      id: 3,
      profileName: "Bank",
      profileDescription: "Bank Profile",
      isActive: true,
    },
    {
      id: 4,
      profileName: "NHAIHD",
      profileDescription: "NHAIHD Profile",
      isActive: false,
    },
  ];

  const columns = [
    { Header: "Profile Name", accessor: "profileName" },
    { Header: "Profile Description", accessor: "profileDescription" },
    {
      Header: "Is Active",
      accessor: "isActive",
      Cell: ({ value }) => (
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          checked={value}
        />
      ),
    },
    {
      Header: "Action",
      accessor: "id",
    },
  ];

  function handleAction(id) {
    // Implement your action logic here based on the id
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Profile Listing</h2>
              <div className="addUserBtnDiv  mt-3">
                <button
                  className="btn addUser"
                  type="button"
                  onClick={() => {
                    // setIsOpen(true);
                    navigate("/NHAI/AddProfile");
                  }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                  Add New Profile
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2">
              {/* col-md-11 mx-auto flex */}
              <DataTable
                columns={columns}
                data={data}
                // customClass="ULTable"
                detailpage="ProfileDetails"
                editpage="EditProfile"
                deletepage="DeleteProfile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
