import React, { useEffect, useState } from "react";
import "../../Assets/Css/Dashboard.css";
import bg from "../../Assets/images/NHAI_bg.png";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DataTable from "../HtmlComponents/DataTable";
import ExcelJS from "exceljs";
import logo from "../../Assets/images/Kotak_logo.png";
import { v4 as uuid } from "uuid";

const Snapshot = () => {
  //const [dynamicDate, setDynamicDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  const cdate = formatDate(currentDate);
  const [dynamicDate, setDate] = useState(cdate);
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [Decimal, setDecimal] = useState(true);

  const [dbdata, setDbdata] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  useEffect(() => {
    console.log("selectedDate1", selectedDate);
    const formatValidDate = formatDate(selectedDate);
    // setDynamicDate(formatValidDate);
    console.log("formatValidDate", dynamicDate);
  }, [selectedDate]);

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
      Header: "Bank",
      accessor: "bank",
      Cell: ({ value }) => <div className="">{value}</div>,
    },
    {
      Header: "Subsidiary Summary",
      accessor: "subsidiarySummary",
      Cell: ({ value }) => <div className="">{value}</div>,
    },
    {
      Header: "Main Transaction",
      accessor: "mainTransactions",
      Cell: ({ value }) => <div className="">{value}</div>,
    },
    {
      Header: "CALA PD Transactions",
      accessor: "calaPDTransactions",
      Cell: ({ value }) => <div className="">{value}</div>,
    },
  ];

  const data = [
    {
      id: 1,
      bank: "Kotak",
      summary: "21-05-2023",
      main: "21-05-2023",
      calaPd: "21-05-2023",
    },
  ];

  useEffect(() => {
    const apiUrl = "http://localhost:3007/api/secure/dashboard";
    const uuid = localStorage.getItem("UUID");
    const headers = {
      XUuid: uuid,
    };
    console.log(cardData);
    // Make the Axios GET request with the headers
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setDbdata(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const d = formatDate(dateValue);
    setDate(d);
  }, [dateValue]);
  useEffect(() => {
    console.log("reqBody-->", reqBody);
  }, [dynamicDate]);

  //Mock----------------------------------------------------------------------
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
  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "nhai",
    statusAsOn: dynamicDate, //"28-09-2023",
  };

  const mockRes = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    decimal: {
      nodalAccountBalance: "10,360.07",
      subsidiaryAccountsCount: 618,
      sanctionLimit: "39,430.72",
      utilizedLimit: "29,297.98",
      unutilizedLimit: "10,132.74",
      utilizationPercentage: "74.30%",
      qtdAccruedInterest: "0.00",
    },
    crore: {
      nodalAccountBalance: "11,111.07", // "10,360.07",
      subsidiaryAccountsCount: 618,
      sanctionLimit: "39,430.72",
      utilizedLimit: "29,297.98",
      unutilizedLimit: "10,132.74",
      utilizationPercentage: "74.30%",
      qtdAccruedInterest: "0.00",
    },
    lastUpdateBankInfo: {
      bank: "Kotak",
      subsidiarySummary: "21-05-2020",
      mainTransactions: "21-05-2020",
      calaPDTransactions: "21-05-2020",
    },
  };
  const [rows, setRows] = useState([mockRes.lastUpdateBankInfo]);
  //-------------------------------------------------------------------------------------------------------
  const cardData = [
    {
      title: "Nodal Account Balance",
      count: Decimal
        ? mockRes.decimal.nodalAccountBalance
        : mockRes.crore.nodalAccountBalance, //"₹10,360,07",
    },
    {
      title: "No of Subsidiary Accounts",
      count: Decimal
        ? mockRes.decimal.subsidiaryAccountsCount
        : mockRes.crore.subsidiaryAccountsCount, //"618",
    },
    {
      title: "Sanction Limit",
      count: Decimal
        ? mockRes.decimal.sanctionLimit
        : mockRes.crore.sanctionLimit, //"₹39,430.72",
    },
    {
      title: "Utilized Limit",
      count: Decimal
        ? mockRes.decimal.utilizedLimit
        : mockRes.crore.utilizedLimit, //"₹29,927.98",
    },
    {
      title: "Un-Utilized Limit",
      count: Decimal
        ? mockRes.decimal.unutilizedLimit
        : mockRes.crore.unutilizedLimit, //"₹10,132,74",
    },
    {
      title: "Utilization Percentage",
      count: Decimal
        ? mockRes.decimal.utilizationPercentage
        : mockRes.crore.utilizationPercentage, //"74.30%",
    },
    {
      title: "QTD Accued Intrest",
      count: Decimal
        ? mockRes.decimal.qtdAccruedInterest
        : mockRes.crore.qtdAccruedInterest, //"₹0.00",
    },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Snapshot", 10, 10);

    // Create a table for cardData
    const tableData = [];
    cardData.forEach((item) => {
      tableData.push([item.title, item.count]);
    });

    doc.autoTable({
      head: [["Title", "Count"]],
      body: tableData,
      startY: 20,
    });

    // Save the PDF with a unique name
    const fileName = `snapshot_${currentDate}.pdf`;
    doc.save(fileName);
  };

  // Function to generate and download the Excel file
  const generateCSV = () => {
    // Prepare the data for CSV export
    const csvData = cardData.map((item) => [
      item.title,
      item.count.replace(/[^\d.-]/g, ""), // Remove non-numeric characters
    ]);

    // Create a CSV string
    const csvContent =
      "Title,Count\n" + csvData.map((row) => row.join(",")).join("\n");

    // Create a Blob object with the CSV data
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a download link
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `snapshot_${currentDate}.csv`;

    // Trigger a click on the link to initiate the download
    link.click();
  };

  const generateXLS = async () => {
    // Prepare the data for XLS export
    const xlsData = cardData.map((item) => ({
      Title: item.title,
      Count: item.count.replace(/[^\d.-]/g, ""),
    }));
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Snapshot Data");
    const logoImageSrc = await fetch(logo)
      .then((response) => response.blob())
      .then((blob) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(blob);
        });
      });
    const logoImageId = workbook.addImage({
      base64: logoImageSrc,
      extension: "png",
    });
    worksheet.addImage(logoImageId, {
      tl: { col: 0, row: 0 }, // Display the image in row 0
      ext: { width: 128, height: 32 }, // Adjust the width and height as needed
    });
    worksheet.getColumn(1).width = 30;
    worksheet.getRow(1).height = 50;

    /////NHAI logo

    const logoNHAIImageSrc = await fetch(bg)
      .then((response) => response.blob())
      .then((blob) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(blob);
        });
      });

    const logoNHAIImageId = workbook.addImage({
      base64: logoNHAIImageSrc,
      extension: "png",
    });

    worksheet.addImage(logoNHAIImageId, {
      tl: { col: 2, row: 0 },
      ext: { width: 50, height: 45 },
    });
    worksheet.columns = [
      { header: "Title", key: "Title", width: 30 },
      { header: "Count", key: "Count", width: 15 },
    ];
    worksheet.headerFooter = {
      evenHeader: null,
      oddHeader: null,
    };
    worksheet.getCell("A1").value = null;
    worksheet.getCell("B1").value = null;

    worksheet.getCell("A3").value = "Title";
    worksheet.getCell("B3").value = "Count";

    xlsData.forEach((item, index) => {
      worksheet.addRow(item);
    });

    // Generate a blob from the workbook
    const blob = await workbook.xlsx.writeBuffer();

    // Create a download link
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(
      new Blob([blob], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      })
    );
    link.download = `snapshot_${currentDate}.xlsx`;

    link.click();
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Snapshot</label> */}
            <div className="float-start dashboardLabels">
              <label className="statusOn">Status As On :</label>
              {"  "}
              <input
                id="dateInput"
                className="inputDate"
                type="date"
                value={dateValue || ""}
                onChange={(e) => {
                  const E = e.target.value;
                  console.log("----->", E);
                  setDateValue(E);
                }}
              />
              {"  "}
            </div>
            <div className="float-end dashboardLabels">
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {
                  setDecimal(false);
                }}
              >
                Crore
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {
                  setDecimal(true);
                }}
              >
                Decimal
              </button>{" "}
              {/* <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {}}
              >
                PDF
              </button>{" "}              */}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={generatePDF} // Call the generatePDF function on button click
              >
                PDF
              </button>
              {/* <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {}}
              >
                Excel
              </button> */}
              <button
                className="btn addUser dashbutton Cml-5"
                type="button"
                onClick={generateXLS} // Call the generateExcel function on button click
              >
                Excel
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="row snapshotForm pt-1"
        style={{ backgroundColor: "#F8F9F9" }}
      >
        <div className="col-12 col-md-8">
          {" "}
          {(cardData || []).map((x, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <input
                  className="form-control m-1 fieldLabel"
                  type="text"
                  name="title"
                  value={x.title}
                  disabled
                  style={{
                    borderRadius: "4px",
                    width: "50%",
                  }}
                />
                {"  "}
                <input
                  className="form-control m-1 fieldInput"
                  style={{
                    textAlign: "end",
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    width: "50%",
                  }}
                  type="text"
                  name="count"
                  value={x.count}
                  disabled
                />
              </div>
            );
          })}
        </div>
        <div className="col-4 d-none d-md-block">
          <img src={bg} className="bg" />
        </div>
        <div className="row bgCard mb-5">
          <span className="subTitle m-2">- Last Updated Bank Information</span>
          <div className="col-12 m-2 ">
            <DataTable
              columns={columns}
              data={rows} //{data}
              customClass="snapTable"
              showSearchBar={false}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
