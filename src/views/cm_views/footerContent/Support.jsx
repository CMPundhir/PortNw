import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
} from "@coreui/react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import TransparentCard from "src/commons/cards/TransparentCard";
import CustomSelect from "src/commons/inputs/CustomSelect";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { apiErrorToast, okSuccessToast } from "../custom/cm_toast";
import FaqView from "./FaqView";

const Support = () => {
  const [currentSubject, setCurrentSubject] = useState();
  const [visible, setVisible] = useState();
  const [request, setRequest] = useState();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    const formData = {
      sub: currentSubject.name,
      name: form.name.value,
      mob: form.mob.value,
      email: form.email.value,
    };

    postJsonData(
      ApiEndpoints.demo,
      formData,
      console.log("Form Data=>", formData),
      setRequest,
      (data) => {
        setVisible(false);
        okSuccessToast("Request Sent Successfully", data);
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };
  return (
    <CRow className="m-3">
      <CCol lg={7} md={12} className="p-3">
        <TransparentCard title="Send a Request">
          <div className="mb-3">
            Please fill out the form below and we promise you to get back to you
            within a couple of hours.
          </div>
          <CForm id="supportForm" className="p-5" onSubmit={handleSubmit}>
            {/* <CFormSelect
              aria-label="Select Your Subject"
              className=" p-3 my-5"
              style={{ borderRadius: "20px", border: "2px solid #8a8989" }}
            >
              <option>Select Subject</option>
              <option value="1">Recharge & Bill </option>
              <option value="2">Account</option>
              <option value="3">Booking</option>
              <option value="3">Other</option>
            </CFormSelect> */}
            <CustomSelect
              style={{ borderRadius: "20px", border: "2px solid #8a8989" }}
              name="subject"
              id="subject"
              list={[
                { name: "Recharge & Bill" },
                { name: "Account" },
                { name: "Booking" },
                { name: "Other" },
              ]}
              onSelect={(sub) => {
                setCurrentSubject(sub);
              }}
            />

            <CFormInput
              className="  p-2 my-5"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
            <CFormInput
              className=" p-2 my-5"
              type="number"
              id="mob"
              name="mob"
              placeholder="Enter Your mobile number"
            />
            <CFormInput
              className="p-2 my-5"
              type="text"
              placeholder="Enter Your Email"
              id="email"
              name="email"
            />
          </CForm>
          <CButton
            type="submit"
            form="supportForm"
            className="py-3 "
            shape="rounded-pill"
            style={{
              width: "200px",
              margin: "0 auto",
              color: "#fff",
              backgroundColor: "#E1609C",
            }}
          >
            Submit
          </CButton>
        </TransparentCard>
      </CCol>
      <CCol lg={5} md={12} className="px-5">
        <FaqView />
      </CCol>
    </CRow>
  );
};

export default Support;
