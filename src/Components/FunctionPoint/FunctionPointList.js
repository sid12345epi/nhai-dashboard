import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddFunctionPoint from "./AddFunctionPoint";
import { useNavigate } from "react-router-dom";

const FunctionPointList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const functionPoints = [
    {
      id: 1,
      functionPointName: "Admin",
      moduleName: "Admin",
      functionPointType: "Menu",
      isActive: true,
    },
    {
      id: 2,
      functionPointName: "User",
      moduleName: "User Access Control",
      functionPointType: "Menu",
      isActive: true,
    },
    {
      id: 3,
      functionPointName: "Rule",
      moduleName: "User Access Control",
      functionPointType: "Menu",
      isActive: true,
    },
    {
      id: 4,
      functionPointName: "User Profile",
      moduleName: "User Access Control",
      functionPointType: "Menu",
      isActive: false,
    },
  ];

  const columns = [
    { Header: "Function Point Name", accessor: "functionPointName" },
    { Header: "Module Name", accessor: "moduleName" },
    { Header: "Function Point Type", accessor: "functionPointType" },
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
              <h2 className="mb-3 mt-3 pageTitle">Function Point Listing</h2>
              <div className="addUserBtnDiv  mt-3">
                <button
                  className="btn addUser"
                  type="button"
                  onClick={() => {
                    // setIsOpen(true);
                    navigate("/NHAI/AddFunctionPoint");
                  }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                  Add New Function Point
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2">
              {/* col-md-11 mx-auto flex */}
              <DataTable
                columns={columns}
                data={functionPoints}
                // customClass="ULTable"
                detailpage="FunctionPointDetails"
                editpage="EditFunctionPoint"
                deletepage="DeleteFunctionPoint"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionPointList;
