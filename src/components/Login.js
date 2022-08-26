import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginBack from "../images/login.png";
import { fetchUserData, getUsers, updateLoggedIn } from "../features/libitems/libitemsSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usersData = useSelector(getUsers);
  console.log('usersData: ', usersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const matched = usersData.filter(data => data.email === email && data.password === password);
    if (matched) {
      dispatch(updateLoggedIn(true))
    }
  };

  return (
    <>
      <div className="container form-container">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-7 col-lg-5">
            <div className="form-container__wrap mx-auto">
              <img className="img-fluid form-container__image" src={loginBack} alt="" />
              <h4 className="mt-4 pl-4">Log In</h4>
              <Form className="p-4"
                onSubmit={(e) => handleSubmit(e)}
              >
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
                  className="form-control btn btn-primary w-100 my-3"
                >
                  Log In
                </Button>
                <span className="mt-2 mr-2">Do you want to sign up?</span>
                <a href={`/signup`}>Sign Up</a>
              </Form>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
