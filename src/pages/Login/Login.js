import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const emailRef = useRef("");
  const passRef = useRef("");
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  let erreorElement;
  const swtichToRagister = () => {
    navigate("/ragister");
  };

  const googleSign = () => {
    signInWithGoogle();
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };
  if (user) {
    navigate("/");
  }
  if (error) {
    erreorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  const forgetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div className="container w-50 mx-auto bg-warning rounded-3 p-4 my-2">
      <Helmet>
        <title>login-car genius service</title>
      </Helmet>
      <h1 className="text-center text-success">Login</h1>
      <hr />
      <>
        <Form onSubmit={fromSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {erreorElement}
          <div className="d-flex justify-content-between">
            <p>
              forgetten password..?{" "}
              <span onClick={forgetPassword} className="link-text">
                reset your password?
              </span>
            </p>
            <p>
              New to ginus car..?{" "}
              <span onClick={swtichToRagister} className="link-text">
                create an account..?
              </span>
            </p>
          </div>
          <div className="text-center mt-4">
            <Button variant="primary w-50" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </>
      <div className="horizantal">
        <div className="line-left"></div>
        <p>or</p>
        <div className="line-right"></div>
      </div>
      <div className="text-center">
        <button onClick={googleSign} className="btn btn-info w-75">
          Logg in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
