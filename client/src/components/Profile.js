import React, { useRef, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Form as ReduxForm, Control } from 'react-redux-form';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';

const bootstrapFormControl = props => {
  return <Form.Control {...props} />;
};

const Profile = ({
  handleSubmit,
  stopRedirect,
  Cancel,
  onLoad,
  isRedirect,
  url
}) => {
  let myRef = useRef();
  let textarea = useRef();
  let sav = useRef();
  let reset = useRef();
  const Change = () => {
    ReactDOM.findDOMNode(sav).removeAttribute('disabled');
    ReactDOM.findDOMNode(reset).removeAttribute('disabled');
    ReactDOM.findDOMNode(textarea).removeAttribute('disabled');
    ReactDOM.findDOMNode(myRef).setAttribute('disabled', 'disabled');
  };
  useEffect(() => {
    stopRedirect();
    onLoad();
  });
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
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Control.text
                model=".username"
                component={bootstrapFormControl}
                type="text"
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Control.text
                model=".email"
                component={bootstrapFormControl}
                type="email"
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Control.text
                model=".description"
                component={bootstrapFormControl}
                as="textarea"
                rows="3"
                disabled
                ref={element => (textarea = element)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              className="ml-1"
              onClick={() => Change()}
              ref={element => (myRef = element)}
            >
              Change
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="ml-1"
              ref={element => (sav = element)}
              disabled
            >
              Save
            </Button>
            <Button
              variant="primary"
              type="button"
              className="ml-1"
              ref={element => (reset = element)}
              onClick={() => Cancel()}
              disabled
            >
              Reset
            </Button>
            <div className="w-100" />
            <Link to="/">Return To Main Menu</Link>
          </ReduxForm>
        </div>
      </div>
      <div>{link(isRedirect)}</div>
    </div>
  );
};

export default Profile;
