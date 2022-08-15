import { CButton, CCardImage, CContainer, CImage } from "@coreui/react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Accordion } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import TransparentCard from "src/commons/cards/TransparentCard";
import { logo_png } from "src/iconsimport";

const FaqViewLg = () => {
  const history = useHistory();

  return (
    <div className="px-5 m-5">
      <div>
        <span className="fw-bold my-5 py-5" style={{ fontSize: "25px" }}>
          Get answers to your queries
        </span>
        <hr />
        <CContainer>
          <div className="row lightCard my-5">
            <div
              className="col-md-3 d-flex justify-content-center mt-5"
              style={{ fontSize: "23px", fontWeight: "400" }}
            >
              Recharge
            </div>
            <div className="col-md-9">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Recharge not done but my money deducted.
                  </Accordion.Header>
                  <Accordion.Body>
                    No need to panic sometimes it may happen, if your recharge
                    not get success within 1 hour kindly check transaction
                    status in my transactions. If not satisfied contact our
                    customer care.{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    I was recharging and got this message: ‘Your Recharge
                    Pending’
                  </Accordion.Header>
                  <Accordion.Body>
                    It happens due to service provider downtime don't worry your
                    recharge will get success once service provider comes online
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    I was not able to recharge
                  </Accordion.Header>
                  <Accordion.Body>
                    May be you are chosing wrong operator or You are recharging
                    with wrong amount or you have entered wrong number or
                    operator is down. In this case your amount will be added to
                    your wallet you can use the same with correct details.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    I recharged on a wrong number.
                  </Accordion.Header>
                  <Accordion.Body>
                    Sorry a few operators provides wrong recharge reversal
                    policy in this case mail us at support@paisaonmobile.com
                    with proper description of your recharge
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </CContainer>
        <CContainer>
          <div className="row lightCard my-5">
            <div
              className="col-md-3 d-flex justify-content-center mt-5"
              style={{ fontSize: "23px", fontWeight: "400" }}
            >
              Payments
            </div>
            <div className="col-md-9">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header> How do I pay?</Accordion.Header>
                  <Accordion.Body>
                    You can pay using Credit Card, Debit Card, Net Banking,
                    Wallet, UPI etc.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How do I pay using a credit/debit card?
                  </Accordion.Header>
                  <Accordion.Body>
                    After choosing your desired service kindly proceed to
                    payments select cards and make payments
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Can I use my bank's Internet Banking feature to make a
                    payment?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes you can use your internet banking facility to make
                    payments if your bank is in the list.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Are there any hidden charges ?
                  </Accordion.Header>
                  <Accordion.Body>
                    No There is no any hidden charges all the taxes are to be
                    paid by us
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </CContainer>
        <CContainer>
          <div className="row lightCard my-5">
            <div
              className="col-md-3 d-flex justify-content-center mt-5"
              style={{ fontSize: "23px", fontWeight: "400" }}
            >
              My Account
            </div>
            <div className="col-md-9">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    Is there any registration fee?
                  </Accordion.Header>
                  <Accordion.Body>
                    No there is no any registration fee, registration is
                    absolutely free
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Is my account information safe?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes your account information is absolutely safe as we follow
                    all neccessary security measures to make your details safe
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How does it work?</Accordion.Header>
                  <Accordion.Body>
                    It is very simple just login to your account select service
                    you want make payment and selected service will be delivered
                    to you instantly on successful payment
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    I did not receive the cashback
                  </Accordion.Header>
                  <Accordion.Body>
                    May be you are not eligible for cashback or there is no any
                    cashback on selected service
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </CContainer>
        <CButton
          className="btn mb-5 mt-3 p-3"
          style={{ width: 200, height: "auto" }}
          onClick={() => {
            history.push("/");
          }}
        >
          <FontAwesomeIcon
            className="me-3"
            icon={faArrowLeft}
          ></FontAwesomeIcon>
          Back To Home
        </CButton>
      </div>
    </div>
  );
};

export default FaqViewLg;
