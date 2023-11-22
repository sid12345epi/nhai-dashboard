import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FunctionPointDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const functionPoints = [
    {
      id: 1,
      functionPointName: "Admin",
      moduleName: "Admin",
      functionPointType: "Menu",
      isActive: true,
      parentModuleId: "User",
    },
    {
      id: 2,
      functionPointName: "User",
      moduleName: "User Access Control",
      functionPointType: "Menu",
      isActive: true,
      parentModuleId: "User",
    },
    {
      id: 3,
      functionPointName: "Rule",
      moduleName: "User Access Control",
      functionPointType: "Menu",
      isActive: true,
      parentModuleId: "User",
    },
    {
      id: 4,
      functionPointName: "User Profile",
      moduleName: "User Access Control",
      functionPointType: "Menu",
      isActive: false,
      parentModuleId: "User",
    },
  ];

  const functionPoint = functionPoints.find((u) => u.id.toString() === userId);

  const path = window.location.pathname;
  const isDelete = path.includes("DeleteFunctionPoint") ? true : false;
  if (!functionPoint) {
    return <p>Function point not found.</p>;
  }

  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-3 mt-3 pageTitle">
              {isDelete ? "Delete Function Point" : "Function Point Details"}
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
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Function Point Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {functionPoint.functionPointName}
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Function Point Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {functionPoint.functionPointType}
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Parent Module Id:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {functionPoint.parentModuleId}
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{functionPoint.gender}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Modified Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {functionPoint.mobileNumber}
            </div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            <div className="col-md-6 UDCoulmns">
              <strong>Module Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{functionPoint.moduleName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Link:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{functionPoint.userId}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {functionPoint.createdDate}
            </div>
            <div className="col-md-6 UDCoulmns">
              <strong>Is Active:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {/* {functionPoint.isActive ? "Yes" : "No"} */}
              <input
                name="isActive"
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                //style={{ width: "30px", height: "30px" }}
                checked={functionPoint.isActive}
                readOnly
              />
            </div>
            <div className="col-md-6 UDCoulmns">
              <strong>Modified By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{functionPoint.createdBy}</div>
          </div>
        </div>

        <div className="row">
          <div className="addUserBtnDiv col-md-10 text-end mt-3">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/FunctionPoints");
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
                    functionPoints.id
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

export default FunctionPointDetails;
