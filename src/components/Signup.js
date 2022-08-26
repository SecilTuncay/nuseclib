import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateLoggedIn } from "../features/libitems/libitemsSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginBack from "../images/login.png";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log('handleSubmit: ');
    e.preventDefault();

    dispatch(updateLoggedIn(true))
    navigate("/");
  };

  return (
    <>
      <div className="container form-container">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-7 col-lg-5">
            <div className="form-container__wrap mx-auto ">
              <img className="img-fluid form-container__image" src={loginBack} alt="" />
              <h4 className="mt-4 pl-4">Sign Up</h4>
              <Form className="p-4"
                onSubmit={(e) => dispatch(addUser({
                  firstName,
                  lastName,
                  email,
                  password
                }))}
              >

                <Form.Group className="mb-3" controlId="formBasicFirstName">

                  <Form.Control
                    type="name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">

                  <Form.Control
                    type="name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
