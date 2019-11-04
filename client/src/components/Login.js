import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Form as ReduxForm, Control } from 'react-redux-form';
import { Redirect, Link } from 'react-router-dom';

const bootstrapFormControl = props => {
  return <Form.Control {...props} />;
};

const Login = ({ handleSubmit, stopRedirect, isRedirect, url }) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={url} />;
    }
    return <div />;
  };
  useEffect(() => {
    stopRedirect();
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="border border-primary p-2 col-4">
          <ReduxForm model="userFormData" onSubmit={v => handleSubmit(v)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Control.text
                model=".email"
                component={bootstrapFormControl}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Control.text
                model=".password"
                component={bootstrapFormControl}
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Link to="/user/login">Register</Link>
          </ReduxForm>
        </div>
        <div>{link(isRedirect)}</div>
      </div>
    </div>
  );
};

export default Login;
