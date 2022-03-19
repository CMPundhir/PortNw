import React from "react";

const CircleGradPurple = ({
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
        background: "#CB6796 0% 0% no-repeat padding-box",
      }}
    >
      {children}
    </div>
  );
};

export default CircleGradPurple;
