import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Form as ReduxForm, Control } from 'react-redux-form';
import { Redirect } from 'react-router-dom';

const bootstrapFormControl = props => {
  return <Form.Control {...props} />;
};

const Register = ({ isRedirect, url, handleSubmit }) => {
  const link = isRedirect => {
    if (isRedirect) {
      return <Redirect to={url} />;
    }
    return <div />;
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="border border-primary p-2 col-4">
          <ReduxForm model="userFormData" onSubmit={v => handleSubmit(v)}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Control.text
                model=".username"
                component={bootstrapFormControl}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
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
            <a href="/user/login">Register</a>
          </ReduxForm>
        </div>
        {link(isRedirect)}
      </div>
    </div>
  );
};

export default Register;
