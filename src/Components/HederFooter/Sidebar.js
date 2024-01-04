import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faFile,
  faKey,
  faUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home"); // Initialize with the default active item
  const [isToggleA, setToggleA] = useState(false);
  const [isToggleP, setToggleP] = useState(false);
  const [isToggleR, setToggleR] = useState(false);
  // Create a state object to hold the dynamic toggle states
  const [toggleStates, setToggleStates] = useState({});

  const simpleCss = "alink list-group-item list-group-item-action py-2 ripple";
  const activeCss =
    "alink list-group-item list-group-item-action py-2 ripple active";
  const menucss = "alink list-group-item list-group-item-action px-3";
  const amenucss =
    "alink list-group-item list-group-item-action px-3 border-0 active";
  // Handle changing the active item
  const handleSetActiveItem = (itemName) => {
    setActiveItem(itemName);
  };

  const data = [
    {
      id: 1,
      menuName: "Home",
      url: "/NHAI/Dashboard",
      subMenu: [
        { id: 1, name: "Snapshot", check: true, action: [] },
        { id: 2, name: "Financial", check: false, action: [] },
        { id: 3, name: "Financial(D)", check: false, action: [] },
        { id: 4, name: "Bank", check: true, action: [] },
        { id: 5, name: "Zone", check: true, action: [] },
        { id: 6, name: "RO", check: true, action: [] },
        { id: 7, name: "PIU", check: true, action: [] },
        { id: 8, name: "Account Level", check: true, action: [] },
        { id: 9, name: "Transaction", check: true, action: [] },
        { id: 10, name: "Ageing", check: true, action: [] },
        { id: 11, name: "Events", check: true, action: [] },
        { id: 12, name: "Limit Ledger", check: true, action: [] },
        { id: 13, name: "Velocity", check: true, action: [] },
      ],
    },
    {
      id: 2,
      menuName: "Admin",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "User",
          url: "/NHAI/Users",
          check: true,
          action: [
            { id: 1, actionName: "List", check: true },
            { id: 2, actionName: "Modify", check: true },
            { id: 3, actionName: "Add", check: false },
            { id: 4, actionName: "View", check: false },
            { id: 5, actionName: "Delete", check: false },
          ],
        },
        {
          id: 2,
          name: "User Profile",
          url: "/NHAI/Profiles",
          check: true,
          action: [
            { id: 1, actionName: "List", check: true },
            { id: 2, actionName: "Modify", check: true },
            { id: 3, actionName: "Add", check: false },
            { id: 4, actionName: "View", check: false },
            { id: 5, actionName: "Delete", check: false },
          ],
        },
        {
          id: 3,
          name: "User Group",
          url: "/NHAI/Groups",
          check: true,
          action: [
            { id: 1, actionName: "List", check: true },
            { id: 2, actionName: "Modify", check: true },
            { id: 3, actionName: "Add", check: false },
            { id: 4, actionName: "View", check: false },
            { id: 5, actionName: "Delete", check: false },
          ],
        },
        {
          id: 4,
          name: "Menu Management",
          url: "/NHAI/MenuManagement",
          check: true,
          action: [],
        },
        {
          id: 5,
          name: "Assign Rights",
          url: "/NHAI/AssignRights",
          check: false,
          action: [],
        },
        {
          id: 6,
          name: "Rule",
          url: "/NHAI/Rule",
          check: false,
          action: [],
        },
        {
          id: 7,
          name: "File Upload",
          url: "/NHAI/FileUpload",
          check: true,
          action: [],
        },
        {
          id: 8,
          name: "Mapping Master",
          url: "/NHAI/MappingMaster",
          check: true,
          action: [],
        },
        {
          id: 9,
          name: "Job Execution Log",
          url: "/NHAI/JobExecutionLog",
          check: true,
          action: [],
        },
      ],
    },
    {
      id: 3,
      menuName: "Manage Password",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "Change Password",
          url: "/NHAI/ChangePassword",
          check: true,
          action: [],
        },
      ],
    },
    {
      id: 4,
      menuName: "Reports",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "User Login Report",
          url: "/NHAI/UserLoginReport",
          check: true,
          action: [],
        },
        {
          id: 2,
          name: "User Active/Inactive",
          url: "/NHAI/UserActiveInactiveReport",
          check: true,
          action: [],
        },
        {
          id: 3,
          name: "FIFO Ageing Report",
          url: "/NHAI/FIFOAgeingReport",
          check: true,
          action: [],
        },
      ],
    },
  ];

  // Initialize the toggle states based on JSON data
  const initializeToggleStates = () => {
    const initialState = {};
    data.forEach((item) => {
      initialState[`item_${item.id}`] = false; // Initialize as false (not toggled)
    });
    setToggleStates(initialState);
  };

  // Call the initialization function when the component mounts
  React.useEffect(() => {
    initializeToggleStates();
  }, []);

  const handleToggle = (itemId) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [`item_${itemId}`]: !prevState[`item_${itemId}`], // Toggle the state
    }));
  };

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse navColor"
      // style={{ backgroundColor: "#8ccff0" }}
      //style={{ backgroundColor: "red" }}
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush">
          {(data || []).map((x) => {
            return (
              <>
                <Link
                  to={x.url}
                  className={
                    activeItem.includes(x.menuName) ? activeCss : simpleCss
                  }
                  onClick={() => {
                    handleSetActiveItem(x.menuName);
                    handleToggle(x.id);
                    //setToggle(!isToggle);
                  }}
                >
                  {" "}
                  <div className="navtitle" key={x.id}>
                    <FontAwesomeIcon
                      icon={
                        x.menuName == "Home"
                          ? faHouse
                          : x.menuName == "Admin"
                          ? faUser
                          : x.menuName == "Manage Password"
                          ? faKey
                          : faFile
                      }
                      className="MenuIcon"
                    />{" "}
                    <span>{x.menuName}</span>
                  </div>
                  <>
                    {x.menuName != "Home" && ( //  x.subMenu.length != 0
                      <FontAwesomeIcon
                        icon={
                          toggleStates[`item_${x.id}`]
                            ? faAngleDown
                            : faAngleRight
                        }
                        className="rside"
                      />
                    )}
                  </>
                </Link>
                {toggleStates[`item_${x.id}`] ? (
                  <div className="list-group list-group-light">
                    {(x.subMenu || []).map((z) => {
                      return x.menuName != "Home" && z.check ? (
                        <>
                          <Link
                            to={z.url}
                            className={
                              activeItem == x.menuName + z.name
                                ? amenucss
                                : menucss
                            }
                            onClick={() =>
                              handleSetActiveItem(x.menuName + z.name)
                            }
                          >
                            <div className="menutitle">
                              <FontAwesomeIcon icon={faAngleRight} />
                              {"  "} {z.name}
                            </div>
                          </Link>
                        </>
                      ) : (
                        ""
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
