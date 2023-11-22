import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const UserAdd = () => {
  const customStyles = {
    content: {
      width: "700px", // Set desired width
      height: "600px", // Set desired height
      margin: "auto", // Center the modal horizontally
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("User Name is required"),
    userType: Yup.string().required("User Type is required"),
    userDomainName: Yup.string().required("User Domain Name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    workPhone: Yup.string().required("Work Phone is required"),
    userId: Yup.string().required("User ID is required"),
    employeeNumber: Yup.string().required("Employee Number is required"),
    role: Yup.string().required("Role is required"),
    mobile: Yup.string().required("Mobile Number is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        userName: "",
        userType: "",
        userDomainName: "",
        gender: "",
        email: "",
        workPhone: "",
        userId: "",
        employeeNumber: "",
        role: "",
        mobile: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      <div className="row p-2">
        <div className="border border-dark rounded-1 bg-white p-2">
          <h5>Add/Edit User</h5>
        </div>
        <hr />
        <Form>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  placeholder="Enter user name"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userType" className="form-label">
                  User Type
                </label>
                <Field
                  as="select"
                  className="form-control"
                  id="userType"
                  name="userType"
                >
                  <option value="">Select user type</option>
                  <option value="NHAI">NHAI</option>
                  <option value="BANK">BANK</option>
                  <option value="PD">PD</option>
                  <option value="RO">RO</option>
                </Field>
                <ErrorMessage
                  name="userType"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userDomainName" className="form-label">
                  User Domain Name
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="userDomainName"
                  name="userDomainName"
                  placeholder="Enter user domain name"
                />
                <ErrorMessage
                  name="userDomainName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <Field
                  as="select"
                  className="form-control"
                  id="gender"
                  name="gender"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="error" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="mb-3">
                <label htmlFor="workPhone" className="form-label">
                  Work Phone
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="workPhone"
                  name="workPhone"
                  placeholder="Enter work phone"
                />
                <ErrorMessage
                  name="workPhone"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                  User ID
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="userId"
                  name="userId"
                  placeholder="Enter user ID"
                />
                <ErrorMessage name="userId" component="div" className="error" />
              </div>
              <div className="mb-3">
                <label htmlFor="employeeNumber" className="form-label">
                  Employee Number
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="employeeNumber"
                  name="employeeNumber"
                  placeholder="Enter employee number"
                />
                <ErrorMessage
                  name="employeeNumber"
                  component="div"
                  className="error"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <Field
                  as="select"
                  className="form-control"
                  id="role"
                  name="role"
                >
                  <option value="">Select role</option>
                  <option value="AdminRole">AdminRole</option>
                  <option value="Role">Role</option>
                  {/* Add more role options */}
                </Field>
                <ErrorMessage name="role" component="div" className="error" />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile no."
                />
                <ErrorMessage name="mobile" component="div" className="error" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="mb-5">
            <button
              className="btn addUser min"
              style={{ marginRight: "10px" }}
              type="submit"
              onClick={() => {}}
            >
              Submit
            </button>
            {"  "}
            <button
              className="btn addUser min"
              type="button"
              onClick={() => {}}
            >
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default UserAdd;
