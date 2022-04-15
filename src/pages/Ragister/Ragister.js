import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Ragister = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [agree, setAgree] = useState(false);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");

  const navigate = useNavigate();

  const swtichToLogin = () => {
    navigate("/login");
  };
  const fromSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log(name, email, pass);
    createUserWithEmailAndPassword(email, pass, name);
  };
  return (
    <div className="container w-50 mx-auto bg-warning rounded-3 p-4 my-4">
      <h1 className="text-center text-success">Ragister here</h1>
      <hr />
      <>
        <Form onSubmit={fromSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group onClick={()=>setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox">
            <Form.Check className={agree? "text-success" : "text-danger"} type="checkbox" label="accept tarms & condition" />
          </Form.Group>
          <div></div>
          <div className="d-flex justify-content-between">
            <Button disabled={!agree} variant="primary" type="submit">
              Submit
            </Button>
            <p>
              <span onClick={swtichToLogin} className="link-text">
                Allrady have an account..?
              </span>
            </p>
          </div>
        </Form>
      </>
    </div>
  );
};

export default Ragister;
