import { CImage } from "@coreui/react";
import React from "react";
import SearchBox from "src/commons/components/SearchBox";
import { FBook, Insta, portPay, Twitter } from "src/iconsimport";

const IndexFooter = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      {/* FOOTER START */}
      <div className="footer">
        <div className="contain">
          <div className="col">
            <ul>
              <li className="pt-5">
                <CImage src={portPay} width={200} />
              </li>
              <li className="p-2">
                <CImage className="p-3" src={FBook} />
                <CImage className="p-3" src={Twitter} />
                <CImage className="p-3" src={Insta} />
              </li>
            </ul>
          </div>
          <div className="col">
            <h1>Products</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div className="col">
            <h1>Resources</h1>
            <ul>
              <li>Webmail</li>
              <li>Redeem code</li>
              <li>WHOIS lookup</li>
              <li>Site map</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
          <div className="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
          <div className="col social">
            <h1>Social</h1>
            <ul>
              <div>
                <SearchBox />
              </div>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default IndexFooter;
