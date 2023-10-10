import React from "react";
import Sidebar from "../HederFooter/Sidebar";
import VarientSidebar2 from "./varientSidebar2";
import DataTable from "../HtmlComponents/DataTable";
import Button from "@mui/material/Button";
import VarientSidebar1 from "./varientSidebar1";
import App from "../../App";

const Varients = () => {
  const columns = [
    {
      Header: "Parameters",
      accessor: "parameter",
      //  Cell: ({ value }) => <div style={{ float: "left" }}>{value}</div>,
    },
    {
      Header: "Total", //<div className="float-end fw-bold">Total</div>,
      accessor: "total",
      //Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
    },

    {
      Header: "Edit",
      accessor: "edit",
      Cell: ({ value }) => (
        // <button className="btn addUser dashbutton varientb3" type="button">
        //   Edit
        // </button>
        <Button
          size="small"
          sx={{
            fontFamily: "roboto",
            backgroundColor: "#002850",
            ":hover": {
              bgcolor: "white",
              color: "#002850",
              borderColor: "#002850",
            },
          }}
          variant="contained"
        >
          Edit
        </Button>
      ),
    },
    {
      Header: "Delete",
      accessor: "delete",
      Cell: ({ value }) => (
        // <button className="btn addUser dashbutton varientb3" type="button">
        //   Delete
        // </button>
        <Button
          size="small"
          sx={{
            fontFamily: "roboto",
            backgroundColor: "#002850",
            ":hover": {
              bgcolor: "white",
              color: "#002850",
              borderColor: "#002850",
            },
          }}
          variant="contained"
        >
          Delete
        </Button>
      ),
    },
  ];
  const columns2 = [
    {
      Header: "Parameters",
      accessor: "parameter",
      //  Cell: ({ value }) => <div style={{ float: "left" }}>{value}</div>,
    },
    {
      Header: "Total", //<div className="float-end fw-bold">Total</div>,
      accessor: "total",
      //Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
    },

    {
      Header: "Edit",
      accessor: "edit",
      Cell: ({ value }) => (
        // <button className="btn addUser dashbutton varientb2" type="button">
        //   Edit
        // </button>
        /* border: 1px solid red !important;
color: red; */
        <Button
          size="small"
          sx={{
            fontFamily: "roboto",
            border: "1px solid red !important",
            color: "red",
            "&:hover": {
              bgcolor: "red",
              color: "white",
              borderColor: "red",
            },
          }}
          variant="outlined"
        >
          Edit
        </Button>
      ),
    },
    {
      Header: "Delete",
      accessor: "delete",
      Cell: ({ value }) => (
        // <button className="btn addUser dashbutton varientb2" type="button">
        //   Delete
        // </button>
        <Button
          size="small"
          sx={{
            fontFamily: "roboto",
            border: "1px solid red !important",
            color: "red",
            "&:hover": {
              bgcolor: "red",
              color: "white",
              borderColor: "red",
            },
          }}
          variant="outlined"
        >
          Delete
        </Button>
      ),
    },
  ];
  const columns3 = [
    {
      Header: "Parameters",
      accessor: "parameter",
      //  Cell: ({ value }) => <div style={{ float: "left" }}>{value}</div>,
    },
    {
      Header: "Total", //<div className="float-end fw-bold">Total</div>,
      accessor: "total",
      //Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
    },

    {
      Header: "Edit",
      accessor: "edit",
      Cell: ({ value }) => (
        // <button className="btn addUser dashbutton varientb1" type="button">
        //   Edit
        // </button>
        <Button
          size="small"
          sx={{
            fontFamily: "roboto",
            backgroundColor: "red",

            "&:hover": {
              bgcolor: "white",
              color: "red",
              borderColor: "red",
            },
          }}
          variant="contained"
        >
          Edit
        </Button>
      ),
    },
    {
      Header: "Delete",
      accessor: "delete",
      Cell: ({ value }) => (
        // <button className="btn addUser dashbutton varientb1" type="button">
        //   Delete
        // </button>
        <Button
          size="small"
          sx={{
            fontFamily: "roboto",
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "white",
              color: "red",
              border: "1",
              borderColor: "red",
            },
          }}
          variant="contained"
        >
          Delete
        </Button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      parameter: "Nodal Account Balance",
      total: "10,360.07",
    },
    {
      id: 2,
      parameter: "No of Subsidiary Accounts",
      total: "618",
    },
    { id: 3, parameter: "Sanction Limit", total: "39,430.72" },
    // { id: 4, parameter: "Utilized Limit", total: "29,927.98" },
    // { id: 5, parameter: "Un-Utilized Limit", total: "10,132.74" },
    // { id: 6, parameter: "Utilization Percentage", total: "74.30%" },
    // { id: 7, parameter: "QTD Accued Intrest", total: "0.00" },
  ];
  return (
    //varientsSidebar1//varientsTable
    <>
      {/* <div className="p-2">
        <DataTable
          columns={columns}
          data={data}
          customClass="BankTable"
          showSearchBar={false}
        />{" "}
      </div>
      <div className="p-2">
        <DataTable
          columns={columns2}
          data={data}
          customClass="varient2"
          showSearchBar={false}
        />{" "}
      </div>
      <div className="p-2">
        <DataTable
          columns={columns3}
          data={data}
          customClass="varient3"
          showSearchBar={false}
        />{" "}
      </div> */}

      <Sidebar />
      {/* <VarientSidebar1 /> */}
      {/* <VarientSidebar2 /> */}
    </>
  );
};

export default Varients;
