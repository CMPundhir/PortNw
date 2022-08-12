import {
  faFileAlt,
  faMailBulk,
  faMapMarked,
  faMapMarker,
  faMapMarkerAlt,
  faMobileAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TransparentCard from "src/commons/cards/TransparentCard";

const ContactUs = () => {
  return (
    <div>
      <TransparentCard title="Get In Touch">
        <p style={{ fontSize: "20px" }} className="mb-3">
          For Customer Support and Query, Get in touch with us:
          <a href="#" className="mx-1">
            Help
          </a>
        </p>
        <div className="row my-5">
          <div className="col-md-4 col-sm-12">
            <div className="contactCard ">
              <span className=" mb-3">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="2x"
                  className="hover-zoom my-2"
                />
              </span>
              <div>
                <b className="my-4" style={{ fontSize: "20px" }}>
                  Telephone
                </b>
                <br />
                (+011) 8717945999
              </div>
            </div>{" "}
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="contactCard ">
              <span className=" mb-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  className="contactIcon  my-2"
                />
              </span>
              <div>
                <b className="my-4" style={{ fontSize: "20px" }}>
                  Aporia Technologies Pvt Ltd
                </b>
                <br />
                Plot No 9 Kh No 18/11 Back <br />
                Portion First Floor Village Badli
                <br />
                Delhi 110042 <br />
                India
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="contactCard ">
              <span className=" mb-3">
                <FontAwesomeIcon
                  icon={faMailBulk}
                  size="2x"
                  className="hover-zoom my-2"
                />
              </span>
              <div>
                <b className="my-4" style={{ fontSize: "20px" }}>
                  Business Inquiries
                </b>
                <br />
                aporiatechno1155@gmail.com
                <br />
              </div>
            </div>{" "}
          </div>
        </div>
      </TransparentCard>
    </div>
  );
};

export default ContactUs;
