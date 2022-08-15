import { CImage } from "@coreui/react";
import React, { useState } from "react";
import "./LoginView.css";
import { logo_png } from "src/iconsimport";
import SignUpForm from "./Component/SignUpForm";
import { useHistory } from "react-router";
import "./SignupView.css";
import CircleGrad from "src/commons/components/CircleGrad";
import CircleGradGreen from "src/commons/components/CircleGradGreen";

const SignupView = ({}) => {
  const history = useHistory();

  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);

  return (
    <div>
      <div
        style={{ position: "fixed", zIndex: -2, left: "1050px", top: "290px" }}
      >
        <CircleGrad width="600px" height="600px" radius="300px" />
      </div>
      <div
        style={{ position: "fixed", zIndex: -1, left: "150px", top: "150px" }}
      >
        <CircleGradGreen width="200px" height="200px" radius="100px" />
      </div>
      <div className=" p-3 login_bg">
        <div className="text-center mt-2">
          <CImage
            src={logo_png}
            style={{ width: 200, height: "auto" }}
            onClick={() => {
              history.push("/");
            }}
          />
        </div>

        <div
          className="fw-bold text-center"
          style={{
            font: "'Montserrat', sans-serif",
            fontSize: "17px",
            marginBottom: "20px",
          }}
        >
          Please fill in this form to create an account.
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignupView;
