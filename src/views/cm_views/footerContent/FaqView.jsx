import Accordion from "react-bootstrap/Accordion";
import React from "react";
import TransparentCard from "src/commons/cards/TransparentCard";

const FaqView = () => {
  return (
    <div className=" mb-2 pt-3">
      <Accordion defaultActiveKey="0">
        <span className="fw-bold  " style={{ fontSize: "28px" }}>
          FAQ
        </span>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How can I make a account?</Accordion.Header>
          <Accordion.Body>
            LGo to Login/Signup link on home page and click on signup provide
            necessary information and done.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Is there any registration fee?</Accordion.Header>
          <Accordion.Body>
            No there is no any registration fee it is absolutely free
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Is my account information safe?</Accordion.Header>
          <Accordion.Body>
            Yes your account information is absolutely safe as we follow all
            neccessary security measures to make your details safe
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>I did not receive the cashback</Accordion.Header>
          <Accordion.Body>
            May be you are not eligible for cashback or there is no any cashback
            on selected service
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Forgot my password! What next?</Accordion.Header>
          <Accordion.Body>
            Go to home page and click on Login/Signup and use forgot my password
            link
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FaqView;
