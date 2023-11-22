import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddProfile from "./AddProfile";

function UserDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const profiles = [
    {
      id: 1,
      profileName: "Admin",
      profileDescription: "Admin Profile",
      isActive: true,
      createdBy: "AdminUser1",
      createdDate: "2023-08-10",
    },
    {
      id: 2,
      profileName: "PD",
      profileDescription: "PD Profile",
      isActive: true,
      createdBy: "AdminUser2",
      createdDate: "2023-08-09",
    },
    {
      id: 3,
      profileName: "Bank",
      profileDescription: "Bank Profile",
      isActive: true,
      createdBy: "AdminUser3",
      createdDate: "2023-08-08",
    },
    {
      id: 4,
      profileName: "NHAIHD",
      profileDescription: "NHAIHD Profile",
      isActive: false,
      createdBy: "AdminUser4",
      createdDate: "2023-08-07",
    },
  ];

  const profile = profiles.find((u) => u.id.toString() === userId);

  const path = window.location.pathname;
  const isDelete = path.includes("DeleteProfile") ? true : false;
  if (!profile) {
    return <p>Function not found.</p>;
  }

  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-3 mt-3 pageTitle">
              {isDelete ? "Delete Profile" : "Profile Details"}
            </h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          {isDelete ? (
            <h4 className="mb-4 mx-5">
              {isDelete ? "Are you sure you want to delete this?" : ""}
            </h4>
          ) : (
            ""
          )}
          <div className="col-md-11 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Profile Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{profile.profileName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Profile Description:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {profile.profileDescription}
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Is Active:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {/* {profile.isActive ? "Yes" : "No"} */}
              <input
                name="isActive"
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                //style={{ width: "30px", height: "30px" }}
                checked={profile.isActive}
                readOnly
              />
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{profile.createdBy}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{profile.createdDate}</div>
          </div>
        </div>
        <div className="row">
          <div className="addUserBtnDiv col-md-10 text-end mt-3">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/Profiles");
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
                  `/NHAI/${isDelete ? "DeleteProfile" : "EditProfile"}/${
                    profiles.id
                  }`
                );
              }}
            >
              {isDelete ? "Delete" : "Edit"}
            </button>
          </div>
        </div>
      </div>
      {/* <AddProfile isOpen={isOpen} setModal={setIsOpen} /> */}
    </div>
  );
}

export default UserDetails;
