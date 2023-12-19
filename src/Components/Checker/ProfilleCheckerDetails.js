import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProfilleCheckerDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      //boxShadow: "1px 2px #888888",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const profiles = [
    {
      id: 1,
      profileName: "Admin",
      profileDescription: "Admin Profile",
      group: "Admin",
      isActive: true,
    },
    {
      id: 2,
      profileName: "PD",
      profileDescription: "PD Profile",
      group: "PD",
      isActive: true,
    },
    {
      id: 3,
      profileName: "Bank",
      profileDescription: "Bank Profile",
      group: "Bank",
      isActive: true,
    },
    {
      id: 4,
      profileName: "NHAIHD",
      profileDescription: "NHAIHD Profile",
      group: "NHAI",
      isActive: false,
    },
  ];
  const data = [
    {
      id: 1,
      requestName: "Add Profile1",
      requestId: "JD001",
      requestDetails: "Add Profile in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Add Profile2",
      requestId: "JS002",
      requestDetails: "Add Profile in appilication",
      requestType: "Update",
    },
    {
      id: 3,
      requestName: "Add Profile3",
      requestId: "BJ003",
      requestDetails: "Add Profile in appilication",
      requestType: "Update",
    },
    {
      id: 4,
      requestName: "Add Profile4",
      requestId: "AB004",
      requestDetails: "Add Profile in appilication",
      requestType: "Update",
    },
    {
      id: 5,
      requestName: "Add Profile5",
      requestId: "EA005",
      requestDetails: "Add Profile in appilication",
      requestType: "Add",
    },
  ];
  const user = profiles.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const req = data.find((u) => u.id.toString() === userId);
  if (!user) {
    return <p>User not found.</p>;
  }
  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        {/* -----------Request Details------------------ */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">Request Details</h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Request Id:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.id}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Request Description:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestDetails}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Raised by:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">Admin</div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            <div className="col-md-6 UDCoulmns">
              <strong>Request Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestName}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Request Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.employeeNumber}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Request Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestType}</div>
          </div>
        </div>
        {/* -----------User Details--------------------- */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">
              {path.includes("profileAddRequestDetails")
                ? "Add "
                : path.includes("profileUpdateRequestDetails")
                ? "Update "
                : "Delete "}
              Profile Details
            </h2>
          </div>
        </div>

        {!path.includes("profileUpdateRequestDetails") ? (
          <div className="row UserDetails mt-3">
            <div className="col-md-6 mx-auto">
              <div className="col-md-6 UDCoulmns">
                <strong>Profile Name:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.profileName}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Profile Description:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">
                {user.profileDescription}
              </div>

              <div className="col-md-6 UDCoulmns">
                <strong>Created Date:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.createdDate}</div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="col-md-5">
              <div className="col-md-6 UDCoulmns">
                <strong>Group:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.group}</div>
              <div className="col-md-6 UDCoulmns">
                <strong>Active:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.isActive}</div>
              <div className="col-md-6 UDCoulmns">
                <strong>Created By:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.createdBy}</div>
            </div>
          </div>
        ) : (
          <div className="row UserDetails mt-3">
            <div className="col-md-11 mx-auto">
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Field Name</strong>
              </div>
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Existing Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Old Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                <strong>Profile Name:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{user.profileName}</div>
              <div className="col-md-4 UDCoulmns">{user.profileName}</div>
              <div className="col-md-4 UDCoulmns">
                <strong>Profile Description:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {user.profileDescription}
              </div>
              <div className="col-md-4 UDCoulmns">
                {user.profileDescription}
              </div>
              <div className="col-md-4 UDCoulmns">
                <strong>Group:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{user.group}</div>
              <div className="col-md-4 UDCoulmns">{user.group}</div>
              <div className="col-md-4 UDCoulmns">
                <strong>Active:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{user.isActive}</div>
              <div className="col-md-4 UDCoulmns">{user.isActive}</div>
              <div className="col-md-4 UDCoulmns">
                <strong>Updated By:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{user.updatedBy}</div>
              <div className="col-md-4 UDCoulmns">{user.updatedBy}</div>
              <div className="col-md-4 UDCoulmns">
                <strong>Updated Date:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{user.updatedDate}</div>
              <div className="col-md-4 UDCoulmns">{user.updatedDate}</div>
            </div>
          </div>
        )}

        <div className="row mt-4">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/profileRequests");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser checkerAction"
              type="button"
              onClick={() => {
                //setIsOpen(true);
                navigate();
              }}
            >
              Approve
            </button>
            <button
              className="btn addUser"
              type="button"
              onClick={() => {
                //setIsOpen(true);
                //navigate();
                openModal();
              }}
            >
              Decline
            </button>
          </div>
        </div>
        {/* ----------Decline Pop------------------- */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className="float-end mt-2">
              <FontAwesomeIcon
                icon={faTimes}
                style={{
                  cursor: "pointer",
                  marginRight: "8px",
                  color: "black",
                  float: "right",
                }}
                onClick={() => {
                  closeModal();
                }}
              />
            </div>
            <h3 className="text-left">Please add Request decline reason</h3>
            <div className="">
              <textarea
                rows="4"
                name="remark"
                className="form-control"
                placeholder="Enter your remark here"
              />
              <div className="p-2"></div>
              <div className="text-center">
                <button
                  className="btn addUser checkerAction"
                  type="button"
                  onClick={() => {}}
                >
                  Decline
                </button>
                <button
                  className="btn addUser checkerAction"
                  type="button"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProfilleCheckerDetails;
