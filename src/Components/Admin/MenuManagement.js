import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";

const MenuManagement = () => {
  const navigate = useNavigate();
  const [isMenu, setMenu] = useState(false);
  const [isSubmenu, setSubmenu] = useState(false);
  const [isAction, setAction] = useState(false);
  //----------------------------------------------
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [selectedSubmenuList, setSelectedSubmenuList] = useState([]);
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const [selectedSubmenuId, setSelectedSubmenuId] = useState("");
  const [selectedActionList, setSelectedActionList] = useState([]);
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedActionId, setSelectedActionId] = useState("");
  //------------------------------------------------------------
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const validationSchema = yup.object({
    // menu: yup.string().required("Menu is required"),
    // submenu: yup.string().required("Submenu is required"),
    // action: yup.string().required("Action is required"),
    name: yup.string().required("Name is required"),
    url: yup.string().required("Url is required"),
  });
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
  const menuData = [
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
  const [data, setData] = useState(menuData);
  //----------------------------------------------------------------------------------
  // Function to add a menu
  function addMenu(data, newMenu) {
    data.push(newMenu);
    setData(data);
    return data;
  }

  // Function to add a submenu to a specific menu
  function addSubMenu(data, menuId, newSubMenu) {
    const menu = data.find((item) => item.id === menuId);
    if (menu) {
      if (!menu.subMenu) {
        menu.subMenu = [];
      }
      menu.subMenu.push(newSubMenu);
    }
    setData(data);
    return data;
  }

  // Function to add an action to a specific submenu
  function addAction(data, menuId, subMenuId, newAction) {
    const menu = data.find((item) => item.id === menuId);
    if (menu) {
      const subMenu = menu.subMenu.find((subItem) => subItem.id === subMenuId);
      if (subMenu) {
        if (!subMenu.action) {
          subMenu.action = [];
        }
        subMenu.action.push(newAction);
      }
    }
    setData(data);
    return data;
  }
  //----------------------------------------------------------------------------------
  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Menu Management</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission here
                  console.log(values);
                }}
              >
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="menu" className="form-label">
                            {isMenu ? "Add" : "Select"} Menu
                          </label>
                          <div className="row">
                            <div className="col-md-3">
                              {" "}
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="menu"
                                name="menu"
                                value={selectedMenu}
                                onChange={(e) => {
                                  setSelectedMenu(e.target.value);
                                  let list = (data || []).find((x) => {
                                    if (x.menuName === e.target.value) {
                                      setSelectedMenuId(x.id);
                                      return x;
                                    }
                                  });
                                  setSelectedSubmenuList([]);
                                  setSelectedSubmenuList(list);
                                  console.log(
                                    "-->",
                                    e.target.value,
                                    "-->",
                                    list
                                  );
                                }}
                              >
                                <option value="">--Select Menu--</option>
                                {(data || []).map((x) => {
                                  return (
                                    <option value={x.menuName}>
                                      {x.menuName}
                                    </option>
                                  );
                                })}
                              </Field>
                              <ErrorMessage
                                name="menu"
                                component="div"
                                className="error"
                              />{" "}
                            </div>
                            <div className="col-md-2 p-0">
                              {" "}
                              <button
                                className="btn addUser min"
                                style={{ minWidth: "110px" }}
                                onClick={() => {
                                  setName("");
                                  setUrl("");
                                  setMenu(true);
                                  setSubmenu(false);
                                  setAction(false);
                                  openModal();
                                }}
                              >
                                Add New
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="userDomainName"
                            className="form-label"
                          >
                            {isSubmenu ? "Add" : "Select"} Submenu
                          </label>
                          <div className="row">
                            <div className="col-md-3">
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="menu"
                                name="menu"
                                value={selectedMenu}
                              >
                                {/* <option value="">--Select Menu--</option> */}
                                <option value={selectedMenu}>
                                  {selectedMenu}
                                </option>
                              </Field>
                            </div>
                            <div className="col-md-3">
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="submenu"
                                name="submenu"
                                value={selectedSubmenu}
                                onChange={(e) => {
                                  setSelectedSubmenu(e.target.value);
                                  let list = (
                                    selectedSubmenuList.subMenu || []
                                  ).find((x) => {
                                    if (x.name === e.target.value) {
                                      setSelectedSubmenuId(x.id);
                                      return x;
                                    }
                                  });
                                  setSelectedActionList([]);
                                  setSelectedActionList(list);
                                  console.log(
                                    "-->",
                                    e.target.value,
                                    "--action list>",
                                    list.action
                                  );
                                }}
                              >
                                <option value="">--Select Submenu--</option>
                                {(selectedSubmenuList.subMenu || []).map(
                                  (x) => {
                                    return (
                                      <option value={x.name}>{x.name}</option>
                                    );
                                  }
                                )}
                              </Field>
                              <ErrorMessage
                                name="submenu"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="col-md-2 p-0">
                              <button
                                className="btn addUser min"
                                style={{ minWidth: "110px" }}
                                onClick={() => {
                                  setName("");
                                  setUrl("");
                                  setSubmenu(true);
                                  setMenu(false);
                                  setAction(false);
                                  openModal();
                                }}
                              >
                                Add New
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            {isAction ? "Add" : "Select"} Action
                          </label>
                          <div className="row">
                            <div className="col-md-3">
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="menu"
                                name="menu"
                                value={selectedMenu}
                              >
                                <option value={selectedMenu}>
                                  {selectedMenu}
                                </option>
                              </Field>
                            </div>{" "}
                            <div className="col-md-3">
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="submenu"
                                name="submenu"
                                value={selectedSubmenu}
                              >
                                <option value={selectedSubmenu}>
                                  {selectedSubmenu}
                                </option>
                              </Field>
                            </div>
                            <div className="col-md-3">
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="action"
                                name="action"
                                value={selectedAction}
                                onChange={(e) => {
                                  let list = (
                                    selectedActionList.action || []
                                  ).find((x) => {
                                    if (x.actionName === e.target.value) {
                                      setSelectedActionId(x.id);
                                      return x;
                                    }
                                  });
                                  console.log("Selected Action->", list);
                                  setSelectedAction(e.target.value);
                                }}
                              >
                                <option value="">--Select Action--</option>
                                {(selectedActionList.action || []).map((x) => {
                                  return (
                                    <option value={x.actionName}>
                                      {x.actionName}
                                    </option>
                                  );
                                })}
                              </Field>
                              <ErrorMessage
                                name="action"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="col-md-2 p-0">
                              <button
                                className="btn addUser min"
                                style={{ minWidth: "110px" }}
                                onClick={() => {
                                  setName("");
                                  setUrl("");
                                  setAction(true);
                                  setMenu(false);
                                  setSubmenu(false);
                                  openModal();
                                }}
                              >
                                {isAction ? "Cancel" : "Add New"}
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="modal-footer">
                    <button
                      className="btn BackBtn"
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        setSelectedAction("");
                        setSelectedSubmenuList([]);
                        setSelectedActionList([]);
                        setSelectedMenu("");
                        setSelectedSubmenu("");
                      }}
                    >
                      Reset
                    </button>
                    {/* <button
                      className="btn addUser min"
                      style={{
                        marginRight: "10px",
                      }}
                      type="submit"
                      onClick={() => {}}
                    >
                      Save
                    </button> */}
                    {"  "}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        {/* ----------Add Pop------------------------------------------------------- */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Formik
            initialValues={{
              name: name,
              url: url,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Handle form submission here
              console.log(values);
            }}
          >
            <Form>
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
                <h3 className="text-left">
                  Add {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"}
                </h3>
                <div className="">
                  <label htmlFor="name" className="form-label">
                    {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"} Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></Field>
                  <ErrorMessage name="name" component="div" className="error" />
                  <label htmlFor="name" className="form-label">
                    {isMenu ? "Menu Url" : isSubmenu ? "Submenu Url" : ""}
                  </label>
                  {!isAction ? (
                    <>
                      <Field
                        type="text"
                        className="form-control"
                        id="url"
                        name="url"
                        value={url}
                        onChange={(e) => {
                          setUrl(e.target.value);
                        }}
                      ></Field>
                      <ErrorMessage
                        name="url"
                        component="div"
                        className="error"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <div className="p-2"></div>
                  <div className="text-center">
                    <button
                      className="btn addUser checkerAction"
                      type="submit"
                      onClick={() => {
                        if (isMenu) {
                          // Adding a new menu
                          const newDataWithMenu = addMenu(data, {
                            id: uuid(),
                            menuName: name, //"New Menu",
                            url: url, //"/NHAI/NewMenu",
                            subMenu: [],
                          });
                          console.log("Added Menu->", newDataWithMenu);
                          closeModal();
                        } else if (isSubmenu) {
                          // Adding a new submenu to an existing menu (e.g., Admin)
                          const newDataWithSubMenu = addSubMenu(
                            data,
                            selectedMenuId,
                            {
                              id: uuid(),
                              name: name, //"New Submenu",
                              url: url, //"/NHAI/NewSubMenu",
                              check: false,
                              action: [],
                            }
                          );
                          console.log("Added Submenu->", newDataWithSubMenu);
                          closeModal();
                        } else {
                          // Adding a new action to an existing submenu (e.g., User Profile)
                          const newDataWithAction = addAction(
                            data,
                            selectedMenuId,
                            selectedSubmenuId,
                            {
                              id: uuid(),
                              actionName: name, //"New Action",
                              check: false,
                            }
                          );
                          console.log("Added Action->", newDataWithAction);
                          closeModal();
                        }
                      }}
                    >
                      Submit
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
            </Form>
          </Formik>
        </Modal>
        {/* ---------------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default MenuManagement;
