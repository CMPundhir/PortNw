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
          "transparent linear-gradient(328deg, #831e4d 30%, #e1609c 70% ) 0% 0% no-repeat padding-box",
      }}
    >
      {children}
    </div>
  );
};

export default CircleLightPurple;
