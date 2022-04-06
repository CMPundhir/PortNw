import React from "react";

const CircleLightPurple = ({
  width = "100px",
  height = "100px",
  radius = "50px",
  children,
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: radius,
        background:
          "transparent linear-gradient(328deg, #789FF8 20%, #AABDE9 ) 0% 0% no-repeat padding-box",
      }}
    >
      {children}
    </div>
  );
};

export default CircleLightPurple;
