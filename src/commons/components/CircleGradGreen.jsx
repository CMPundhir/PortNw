import React from "react";

const CircleGradGreen = ({
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
          "transparent linear-gradient(328deg, #93FB9A 0%, #34BBBF 100%) 0% 0% no-repeat padding-box",
      }}
    >
      {children}
    </div>
  );
};

export default CircleGradGreen;
