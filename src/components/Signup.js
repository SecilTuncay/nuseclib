import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginBack from "../images/login.PNG"

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const user = useSelector(getUser);

  //const dispatch = useDispatch();
  /* 
    const handleSubmit = (e) => {
      e.preventDefault();
      debugger;
      if (user.email === email && user.password === password) {
        dispatch(login({ loggedIn: true }));
      } else {
        console.log("hello");
      }
    }; */

  return (
    <>
      <div className="container form-container">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-7 col-lg-5">
            <div className="form-container__wrap mx-auto ">
              <img className="form-container__image" src={loginBack} alt="" />
              <h4 className="mt-4 pl-4">Sign Up</h4>
              <Form className="p-4"
              /* onSubmit={(e) => handleSubmit(e)} */
              >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="form-control btn btn-primary w-100 mt-4"
                >
                  Sign Up
                </Button>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
