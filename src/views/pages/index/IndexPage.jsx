import React from "react";
import CircleLightPurple from "src/commons/components/CircleLightPurple";
import CircleSmallPurple from "src/commons/components/CircleSmallPurple";

import { IndexNav } from "./IndexNav";
import "./IndexPage.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import { SectionFour } from "./SectionFour";
import SectionFive from "./SectionFive";

const IndexPage = () => {
  return (
    <>
      <IndexNav />
      <div
        className="text-center"
        style={{ overflowY: "scroll", overflowX: "hidden" }}
      >
        {/* section 1 */}

        <div
          style={{
            zIndex: -10,
            width: "100vw",
            height: "110vh",
            background:
              "transparent linear-gradient(180deg, #FFFFFF70 0%, #1563FF80 100%) 0% 0% no-repeat padding-box  ",
          }}
        >
          <SectionOne />
          {/* circle 1 */}
          <div
            style={{
              position: "relative",
              zIndex: -2,
              left: "850px",
              marginTop: "50px",
              marginLeft: "100px",
            }}
          >
            <CircleLightPurple width="400px" height="400px" radius="300px" />
          </div>
          {/* circle 2 */}
          <div
            style={{
              position: "relative",
              zIndex: -2,
              marginTop: "3px",
              marginLeft: "890px",
            }}
          >
            <CircleSmallPurple width="130px" height="130px" radius="300px" />
          </div>
        </div>

        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    </>
  );
};

export default IndexPage;
