import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";

const JobExecutionLog = () => {
  const [formDate, setFormDate] = useState("");

  const [dateFromValue, setDateFromValue] = useState(
    new Date().toISOString().split("T")[0]
  );

  function formatDate(inputDate) {
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
    const day = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);
    const dd = String(formattedDate.getDate()).padStart(2, "0");
    const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
    const yyyy = formattedDate.getFullYear();
    var today = new Date(inputDate);
    var dayOfWeek = today.getDay();
    var daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Get the day name from the array
    var dayName = daysOfWeek[dayOfWeek];
    console.log(dayName);
    // Format the date in "dd-mm-yyyy" format
    return (
      <div>
        {dd}-{mm}-{yyyy} {dayName}
      </div>
    );
  }
  const columns = [
    {
      Header: "Sr. No",
      accessor: "srno",
    },
    {
      Header: "Upload ID",
      accessor: "uploadId",
    },
    {
      Header: "Upload Name",
      accessor: "uploadName",
    },
    {
      Header: "Upload Status",
      accessor: "uploadStatus",
    },

    {
      Header: "Message",
      accessor: "message",
    },
    {
      Header: "Job Start Date",
      accessor: "jobDate",
    },
    {
      Header: "Job Start Time",
      accessor: "jobTime",
    },
    {
      Header: "Run Duration",
      accessor: "duration",
    },
  ];
  const data = [
    {
      id: 0,
      srno: 1,
      uploadId: 1,
      uploadName: "Account_Summary",
      uploadStatus: "Succeeded",
      message:
        "commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. \n It is also used to temporarily replace text in a process called greeking, ",
      jobDate: "7/4/2017",
      jobTime: "05:51:39",
      duration: "0:8:45",
    },
    {
      id: 1,
      srno: 2,
      uploadId: 3,
      uploadName: "CALA_PD_Transaction_Data",
      uploadStatus: "Succeeded",
      message:
        "commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. \n It is also used to temporarily replace text in a process called greeking, ",
      jobDate: "7/4/2017",
      jobTime: "6:31:25",
      duration: "0:39.7",
    },
    {
      id: 2,
      srno: 3,
      uploadId: 3,
      uploadName: "Transaction_DATA",
      uploadStatus: "Succeeded",
      message:
        "commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. \n It is also used to temporarily replace text in a process called greeking, ",
      jobDate: "7/4/2017",
      jobTime: "06:09:38",
      duration: "0:9:8",
    },
  ];
  const [rows, setRows] = useState(data);
  return (
    <>
      <div className="wrapper">
        <div className="row p-2">
          <div className="border border-dark rounded-1 bg-white p-2">
            {" "}
            <div className="col">
              <div className="float-start p-2">
                <label className="statusOn  ms-3">Execution Log As On : </label>
                {"  "}
                <input
                  id="dateInput"
                  className="inputDate"
                  type="date"
                  value={dateFromValue || ""}
                  onChange={(e) => {
                    const E = formatDate(e.target.value);
                    setDateFromValue(e.target.value);
                    console.log("----->", E);
                    setFormDate(E);
                  }}
                />{" "}
              </div>
              <div className="float-end p-2">
                {/* <button
                  className="btn addUser dashbutton  ms-5"
                  type="button"
                  onClick={() => {}}
                >
                  Download
                </button>{" "} */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mt-2"></div>
          <DataTable columns={columns} data={rows} showSearchBar={false} />{" "}
          <div className="mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default JobExecutionLog;
