import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const UserCheckerDetails = () => {
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

  const data = [
    {
      id: 1,
      requestName: "Add John Doe",
      requestId: "JD001",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Add Jane Smith",
      requestId: "JS002",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 3,
      requestName: "Add Bob Johnson",
      requestId: "BJ003",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 4,
      requestName: "Add Alice Brown",
      requestId: "AB004",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 5,
      requestName: "Eve Anderson",
      requestId: "EA005",
      requestDetails: "Add user in appilication",
      requestType: "Add",
    },
  ];
  const user = users.find((u) => u.id.toString() === userId);
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
              {path.includes("userAddRequestDetails")
                ? "Add "
                : path.includes("userUpdateRequestDetails")
                ? "Update "
                : "Delete "}
              User Details
            </h2>
          </div>
        </div>

        {!path.includes("userUpdateRequestDetails") ? (
          <div className="row UserDetails mt-3">
            <div className="col-md-6 mx-auto">
              <div className="col-md-6 UDCoulmns">
                <strong>User Full Name:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.fullName}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Mobile Number:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.mobileNumber}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>EMail:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.email}</div>

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
                <strong>Updated Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Old Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                <strong>User Full Name:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{user.fullName}</div>
              <div className="col-md-4 UDCoulmns">{user.fullName}</div>

              <div className="col-md-4 UDCoulmns">
                <strong>Mobile No:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{user.mobileNumber}</div>
              <div className="col-md-4 UDCoulmns">{user.mobileNumber}</div>
            </div>
          </div>
        )}

        <div className="row mt-4">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/UserRequests");
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

export default UserCheckerDetails;
