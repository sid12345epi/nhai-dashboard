import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { CheckerProfileService } from "../../Service/CheckerService/CheckerProfileService";
import { DateFormatFunction } from "../HtmlComponents/DateFunction";
const ProfileCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("profileAddRequestDetails");
  const [isLoading, setIsLoading] = useState(false);
  const [profileRequests, setProfileRequests] = useState([]);
  const [rows, setRows] = useState([]);
  // const data = [
  //   {
  //     id: 1,
  //     requestName: "Add profile1",
  //     requestId: "JD001",
  //     requestDetails: "Add profile in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Add profile2",
  //     requestId: "JS002",
  //     requestDetails: "Add profile in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Add profile3",
  //     requestId: "BJ003",
  //     requestDetails: "Add profile in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Add profile4",
  //     requestId: "AB004",
  //     requestDetails: "Add profile in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Add profile5",
  //     requestId: "EA005",
  //     requestDetails: "Add profile in appilication",
  //     requestType: "Add",
  //   },
  // ];
  // const updatedData = [
  //   {
  //     id: 1,
  //     requestName: "Update profile1",
  //     requestId: "JD001",
  //     requestDetails: "Update profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Update profile2",
  //     requestId: "JS002",
  //     requestDetails: "Update profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Update profile3",
  //     requestId: "BJ003",
  //     requestDetails: "Update profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Update profile4",
  //     requestId: "AB004",
  //     requestDetails: "Update profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Update profile5",
  //     requestId: "EA005",
  //     requestDetails: "Update profile in appilication",
  //     requestType: "Delete",
  //   },
  // ];
  // const DeletedData = [
  //   {
  //     id: 1,
  //     requestName: "Delete profile1",
  //     requestId: "JD001",
  //     requestDetails: "Delete profile in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Delete profile2",
  //     requestId: "JS002",
  //     requestDetails: "Delete profile in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Delete profile3",
  //     requestId: "BJ003",
  //     requestDetails: "Delete profile in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Delete profile4",
  //     requestId: "AB004",
  //     requestDetails: "Delete profile in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Delete profile5",
  //     requestId: "EA005",
  //     requestDetails: "Delete profile in appilication",
  //     requestType: "Delete",
  //   },
  // ];

  const columns = [
    {
      Header: <div className="float-center">Request Id</div>,
      accessor: "requestId",
    },
    {
      Header: <div className="float-center">Request Type</div>,
      accessor: "requestType",
    },
    {
      Header: <div className="float-center">Request Date</div>,
      accessor: "requestRaisedTime",
      Cell: ({ row }) => (
        <div>{DateFormatFunction(row.values.requestRaisedTime)}</div>
      ),
    },
    {
      Header: <div className="float-center">Request Raised By</div>,
      accessor: "requestRaisedBy",
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
              navigate(`/NHAI/${action}/${row.values.requestId}`);
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    fetchProfileRequests();
  }, []);
  //-------------------Profile Request List--------------------------------------------------------
  function fetchProfileRequests() {
    CheckerProfileService.getProfileRequests(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          var reqList = res.data.requests;
          setProfileRequests(reqList);
          const addList = (reqList || []).filter((x) => {
            if (x.requestType === "Add") return x;
          });
          setRows(addList);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  //--------------------------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Profile Requests</h2>
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
                    const addList = (profileRequests || []).filter((x) => {
                      if (x.requestType === "Add") return x;
                    });
                    setRows(addList);
                    setAction("profileAddRequestDetails");
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
                    const updateList = (profileRequests || []).filter((x) => {
                      if (x.requestType === "Update") return x;
                    });
                    setRows(updateList);
                    setAction("profileUpdateRequestDetails");
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
                    const deleteList = (profileRequests || []).filter((x) => {
                      if (x.requestType === "Delete") return x;
                    });
                    setRows(deleteList);
                    setAction("profileDeleteRequestDetails");
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

export default ProfileCheckerList;
