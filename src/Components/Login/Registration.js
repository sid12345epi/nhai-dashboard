import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import forge from 'node-forge';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
  UserName: Yup.string().required('UserName is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const Registration = () => {
  const [publicKey, setPublicKey] = useState('');
  const initialValues = {
    UserName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  React.useEffect(() => {
    async function fetchPublicKey() {
      try {
        const response = await axios.get('http://localhost:3007/api/RSA/public-key');
        setPublicKey(response.data);
      } catch (error) {
        console.error('Error fetching public key:', error);
      }
    }
    fetchPublicKey();
  }, []);

  const handleSubmit = async (values) => {
    if (!publicKey) {
        console.error('Public key not available');
        return;
      }
  
      try {
        //console.log(JSON.stringify(values).toString());

      const publicKeyObject = forge.pki.publicKeyFromPem(publicKey);
        const encrypted = publicKeyObject.encrypt(values, 'RSA-OAEP');
        const encryptedValues = forge.util.encode64(encrypted);
        const response = await axios.post('http://localhost:3007/api/auth/register', { encrypted: encryptedValues });
        console.log(response.data);
        if(response.data){
          toast.success('Registered successfully, You will receive an email', {
              position: 'top-right',
              autoClose: 3000,
            });           
      }else{
          toast.error('Registration failed. Please try again.', {
              position: 'top-right',
              autoClose: 5000,
            });
      }

      //   const encrypt = new JSEncrypt();
      //   encrypt.setPublicKey(publicKey);        
      //   const encryptedValues = encrypt.encrypt('Hello, this is a test string!');

      //   const response = await axios.post('http://localhost:3006/api/register', { encrypted: encryptedValues });
      // console.log(response.data);


      } catch (error) {
        console.error('Error encrypting data:', error);
      }
    
  }; 
      
  
    return (
      <div className="container loginContainer">
        <div className="row m-5">
          <div className="col-md-6 mx-auto">            
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className='d-flex flex-column h-100 justify-content-center loginForm'>
              <h2 className="mb-3 pageTitle">User Registration</h2>
              <hr class="hr mb-3" />
                <div className="form-group mb-3">
                  <label htmlFor="UserName">User Name</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="UserName"
                    name="UserName"
                  />
                  <ErrorMessage className='text-danger' name="UserName" component="div" />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage className='text-danger' name="email" component="div" />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  <ErrorMessage className='text-danger' name="password" component="div" />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                  <ErrorMessage className='text-danger' name="confirmPassword" component="div" />
                </div>

                <button type="submit" className="btn btn-primary loginBtn">Register</button>
                {/* <div className="mb-3 d-inline signupInTxt">
                    <a href="/Login">Sign In</a>
                </div> */}
              </Form>
            </Formik>
          </div>
        </div>
      </div>

    );
  };
  
  export default Registration;
  