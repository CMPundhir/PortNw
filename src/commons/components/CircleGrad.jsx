import React from "react";

const CircleGrad = ({
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
          "transparent linear-gradient(328deg, #ffffff 0%, #2d62ed 37%, #7b92cf 80%, #7d93ce 100%) 0% 0% no-repeat padding-box",
      }}
    >
      {children}
    </div>
  );
};

export default CircleGrad;
