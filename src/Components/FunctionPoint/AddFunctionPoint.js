import React from "react";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const AddFunctionPoint = () => {
  const { userId } = useParams();
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

  const functionPoint = functionPoints.find((u) => u.id.toString() === userId);

  const path = window.location.pathname;
  const isEdit = path.includes("EditFunctionPoint") ? true : false;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    functionPointName: Yup.string().required("Function Point Name is required"),
    functionPointType: Yup.string().required("Function Point Type required"),
  });

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">
                {isEdit ? "Edit" : "Add"} Function Point
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{
                  functionPointName: functionPoint
                    ? functionPoint.functionPointName
                    : "",
                  functionPointType: functionPoint
                    ? functionPoint.functionPointType
                    : "",
                  isActive: functionPoint ? functionPoint.isActive : "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission here
                  console.log(values);
                  //setModal(false);
                }}
              >
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="profileName" className="form-label">
                            Function Point Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="functionPointName"
                            name="functionPointName"
                            placeholder="Enter function point name"
                          />
                          <ErrorMessage
                            name="functionPointName"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="moduleName" className="form-label">
                            Module Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="moduleName"
                            name="moduleName"
                            placeholder="Enter module name"
                          />
                          <ErrorMessage
                            name="moduleName"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="moduleName" className="form-label">
                            Link
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="link"
                            name="link"
                            placeholder="Enter link"
                          />
                          <ErrorMessage
                            name="link"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="moduleName" className="form-label">
                            Parent Module Id
                          </label>
                          <Field
                            as="select"
                            className="form-control form-select"
                            id="moduleNameId"
                            name="moduleNameId"
                            // placeholder="Enter profile description"
                          >
                            {" "}
                            <option value="">Select Parent Module</option>
                            <option value="AdminRole">Admin</option>
                            <option value="Role">User</option>
                            <option value="Role">User Profile</option>
                            <option value="Role">User Group</option>
                            <option value="Role">Rule</option>
                          </Field>
                          <ErrorMessage
                            name="moduleNameId"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="moduleName" className="form-label">
                            Function Point Type
                          </label>
                          <Field
                            as="select"
                            className="form-control form-select"
                            id="functionPointType"
                            name="functionPointType"
                            //placeholder="Enter profile description"
                          >
                            {" "}
                            <option value="" className="greyText">
                              Select Function Point Type
                            </option>
                            <option value="AdminRole">AdminRole</option>
                            <option value="Role">Role</option>
                          </Field>
                          <ErrorMessage
                            name="functionPointType"
                            component="div"
                            className="error"
                          />
                        </div>
                        {isEdit ? (
                          <div className="mb-3">
                            <label htmlFor="IsActive" className="form-label">
                              Is Active
                            </label>
                            <br />
                            <Field
                              name="isActive"
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              style={{ width: "30px", height: "30px" }}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="modal-footer">
                    <button
                      className="btn BackBtn"
                      style={{ marginRight: "10px" }}
                      type="submit"
                      onClick={() => {
                        navigate("/NHAI/FunctionPoints");
                      }}
                    >
                      Back to List
                    </button>
                    <button
                      className="btn addUser min"
                      style={{ marginRight: "10px" }}
                      type="submit"
                      onClick={() => {
                        //setModal(false);
                      }}
                    >
                      Submit
                    </button>
                    {"  "}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunctionPoint;
