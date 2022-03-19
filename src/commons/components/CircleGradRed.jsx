import React from "react";

const CircleGradRed = ({
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
        background: "#A52A2A 0% 0% no-repeat padding-box",
      }}
    >
      {children}
    </div>
  );
};

export default CircleGradRed;
