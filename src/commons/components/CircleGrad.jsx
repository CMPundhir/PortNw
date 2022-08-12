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
          "transparent linear-gradient(328deg, #ffffff 0%, #eaed2d 37%, #ff8989 80%, #ffa585 100%) 0% 0% no-repeat padding-box",

        // "transparent linear-gradient(328deg, #ffffff 0%, #ff8989 37%, #eaed2d 80%, #eaed2d 100%) 0% 0% no-repeat padding-box",
      }}
    >
      {children}
    </div>
  );
};

export default CircleGrad;
