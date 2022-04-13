import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const[user] = useAuthState(auth)
  const emailRef = useRef("");
  const passRef = useRef("");

  const navigate = useNavigate();
  const swtichToRagister = () => {
    navigate("/ragister");
  };

  const googleSign = () => {
    signInWithGoogle()
  }

  const fromSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass)
  };
  if(user){
    navigate("/");
  }
  return (
    <div className="container w-50 mx-auto bg-warning rounded-3 p-4 my-2">
      <h1 className="text-center text-success">Login</h1>
      <hr />
      <>
        <Form onSubmit={fromSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <p>
              New to ginus car..?{" "}
              <span onClick={swtichToRagister} className="link-text">
                create an account..?
              </span>
            </p>
          </div>
        </Form>
      </>
      <div className="horizantal">
        <div className="line-left"></div>
        <p>or</p>
        <div className="line-right"></div>
      </div>
      <div className="text-center">
        <button onClick={googleSign} className="btn btn-info w-75">Logg in with google</button>
      </div>
    </div>
  );
};

export default Login;
