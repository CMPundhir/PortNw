import React from "react";
import CircleLightPurple from "src/commons/components/CircleLightPurple";
import CircleSmallPurple from "src/commons/components/CircleSmallPurple";
import { IndexNav } from "./components/IndexNav";
import "./helper/IndexPage.css";
import SectionOne from "src/views/pages/index/components/SectionOne";
import SectionTwo from "src/views/pages/index/components/SectionTwo";

const IndexPage = () => {
  return (
    <>
      <IndexNav />
      <div
        className="text-center"
        style={{ overflowy: "scroll", overflowX: "hidden" }}
      >
        <div
          className="sec1_bg"
          style={{
            zIndex: -10,
            width: "100%",
            height: "100vh",
            paddingBottom: "25%",
            clipPath: "polygon(50% 0%, 100% 0, 100% 75%, 0 91%, 0 0)",
            position: "relative",
            background:
              "transparent linear-gradient(180deg, #FFFFFF70 0%, #1563FF80 100%) 0% 0% no-repeat padding-box  ",
          }}
        >
          <div className="position-absolute" style={{ top: "0" }}>
            <SectionOne />
          </div>
          {/* circle 1 */}
          <div
            style={{
              position: "relative",
              zIndex: -2,
              left: "60%",
              marginTop: "3%",
              marginLeft: "5%",
            }}
          >
            <CircleLightPurple width="25rem" height="25rem" radius="19rem" />
          </div>
          {/* circle 2 */}
          <div
            style={{
              position: "relative",
              zIndex: -2,
              marginLeft: "50%",
            }}
          >
            <CircleSmallPurple width="8rem" height="8rem" radius="19rem" />
          </div>
        </div>
        <SectionTwo />
      </div>
    </>
  );
};

export default IndexPage;
