import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";

const FifoAgeingReport = () => {
  const [formDate, setFormDate] = useState("");

  const [dateFromValue, setDateFromValue] = useState(
    new Date().toISOString().split("T")[0]
  );

  function formatDate(inputDate) {
    // Parse the input date string into a Date object
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
    const day = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);

    // Extract day, month, and year components
    const dd = String(formattedDate.getDate()).padStart(2, "0");
    const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
    const yyyy = formattedDate.getFullYear();

    // Format the date in "dd-mm-yyyy" format
    return `${dd}-${mm}-${yyyy}`;
  }
  const columns = [
    {
      Header: "PIU Name",
      accessor: "piu",
      //  Cell: ({ value }) => <div style={{ float: "left" }}>{value}</div>,
    },
    {
      Header: "RO Name",
      accessor: "ro",
    },
    {
      Header: "Account No", //<div className="float-end fw-bold">Total</div>,
      accessor: "accNum",
      //Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
    },
    {
      Header: "Account Name",
      accessor: "accName",
    },

    {
      Header: "Value",
      accessor: "value",
    },
    {
      Header: "Date of Request",
      accessor: "requestDate",
    },
    {
      Header: "Sanction Limit",
      accessor: "sanctionLimit",
    },
    {
      Header: "Utilized Limit",
      accessor: "utilizedlimit",
    },
    {
      Header: "Un Utilized Limit",
      accessor: "unUtilizedLimit",
    },
    {
      Header: `FIFO Amount`,
      accessor: "fifoAmount",
    },
    {
      Header: `Current Date`,
      accessor: "currentDate",
    },
    {
      Header: `No of Days`,
      accessor: "days",
    },
    {
      Header: `Ageing`,
      accessor: "ageing",
    },
  ];
  const data = [
    {
      id: 0,
      piu: "Agra",
      ro: "Lucknow(U.P West)",
      accNum: "2312026853",
      accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
      value: "1105812151.00",
      requestDate: "7/4/2017",
      sanctionLimit: "5948106913.00",
      utilizedlimit: "4756267359.00",
      unUtilizedLimit: "1191839554.00",
      fifoAmount: "0.00",
      currentDate: "5/21/2020",
      days: "",
      ageing: "",
    },
    {
      id: 1,
      piu: "Agra",
      ro: "Lucknow(U.P West)",
      accNum: "2312026853",
      accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
      value: "1105812151.00",
      requestDate: "7/4/2017",
      sanctionLimit: "5948106913.00",
      utilizedlimit: "4756267359.00",
      unUtilizedLimit: "1191839554.00",
      fifoAmount: "0.00",
      currentDate: "5/21/2020",
      days: "",
      ageing: "",
    },
    {
      id: 2,
      piu: "Agra",
      ro: "Lucknow(U.P West)",
      accNum: "2312026853",
      accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
      value: "1105812151.00",
      requestDate: "7/4/2017",
      sanctionLimit: "5948106913.00",
      utilizedlimit: "4756267359.00",
      unUtilizedLimit: "1191839554.00",
      fifoAmount: "0.00",
      currentDate: "5/21/2020",
      days: "",
      ageing: "",
    },
    // {
    //id:3,
    //   piu: "Agra",
    //   ro: "Lucknow(U.P West)",
    //   accNum: "2312026853",
    //   accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
    //   value: "1105812151.00",
    //   requestDate: "7/4/2017",
    //   sanctionLimit: "5948106913.00",
    //   utilizedlimit: "4756267359.00",
    //   unUtilizedLimit: "1191839554.00",
    //   fifoAmount: "0.00",
    //   currentDate: "5/21/2020",
    //   days: "",
    //   ageing: "",
    // },
    // {
    //id:4,
    //   piu: "Agra",
    //   ro: "Lucknow(U.P West)",
    //   accNum: "2312026853",
    //   accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
    //   value: "1105812151.00",
    //   requestDate: "7/4/2017",
    //   sanctionLimit: "5948106913.00",
    //   utilizedlimit: "4756267359.00",
    //   unUtilizedLimit: "1191839554.00",
    //   fifoAmount: "0.00",
    //   currentDate: "5/21/2020",
    //   days: "",
    //   ageing: "",
    // },
  ];
  const [rows, setRows] = useState(data);
  return (
    <>
      <div className="wrapper">
        <div className="row p-2">
          <div className="border border-dark rounded-1 bg-white p-2">
            {" "}
            <div className="col">
              {/* <div className="p-2"> */}
              <div className="float-start p-2">
                <label className="statusOn  ms-3">As On Date : </label>
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
                <button
                  className="btn addUser dashbutton  ms-5"
                  type="button"
                  onClick={() => {}}
                >
                  Download
                </button>{" "}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mt-2"></div>
          <DataTable
            columns={columns}
            data={rows} //{data} //
            customClass="LoginReportTable"
            showSearchBar={false}
          />{" "}
          <div className="mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default FifoAgeingReport;
