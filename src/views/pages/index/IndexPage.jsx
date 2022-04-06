import { CRow, CCol } from "@coreui/react";
import React from "react";
import CircleLightPurple from "src/commons/components/CircleLightPurple";
import CircleSmallPurple from "src/commons/components/CircleSmallPurple";

import { IndexNav } from "./IndexNav";
import "./IndexPage.css";

const IndexPage = () => {
  return (
    <>
      <IndexNav />
      <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
        {/* section 1 */}
        <div
          style={{
            zIndex: -10,
            width: "100vw",
            height: "120vh",
            background:
              "transparent linear-gradient(180deg, #FFFFFF70 0%, #1563FF80 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-around"
            style={{ position: "absolute", width: "100%" }}
          >
            <div>
              <h1>Welcome to PortPay</h1>
            </div>
            <div>fkasfdthuljhk</div>
          </div>
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
              marginTop: "30px",
              marginLeft: "800px",
            }}
          >
            <CircleSmallPurple width="150px" height="150px" radius="300px" />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
          dolorum tempore? Eius beatae ipsam repellendus quis labore quas
          maiores deleniti suscipit laudantium eveniet, sapiente ad architecto
          optio tempore blanditiis autem! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Consequuntur nihil perferendis fugit
          deleniti eius deserunt, beatae neque sunt excepturi dolorem,
          consequatur, qui sit doloribus eaque veritatis possimus? Eaque, quo
          dolor consequatur doloribus velit nesciunt facere ipsum, hic ab
          architecto suscipit ad. Dolores quas, alias vitae eum explicabo
          nesciunt! Saepe exercitationem in perspiciatis veritatis, laudantium
          dicta eaque. Atque sed dicta quos odit iste, aut veritatis, beatae,
          cumque hic inventore earum consequuntur optio laudantium. Repellat
          deleniti laborum rerum velit quaerat, explicabo earum delectus
          corporis id temporibus ipsam quasi, aut sit iste inventore mollitia
          vel modi ratione suscipit ducimus unde animi consectetur. Porro harum
          non maiores sequi tempora, praesentium nihil rem. Eius corrupti
          exercitationem distinctio laudantium, tenetur porro, obcaecati
          asperiores facilis inventore molestiae delectus architecto!
          Accusantium ullam rerum dolores quis mollitia consequuntur, animi quos
          atque eaque dignissimos qui beatae ut, nam enim maxime harum, illum
          pariatur distinctio aperiam. Beatae inventore voluptatum cupiditate
          aut delectus aspernatur architecto, harum laboriosam dicta eius, a
          animi repellendus exercitationem, ea vitae consequatur officia ipsa
          commodi officiis iusto ipsam placeat hic doloremque? Error quisquam
          cumque dolores eum deserunt, repudiandae blanditiis voluptate aperiam
          est molestias excepturi officia qui neque fugit id corporis dolorem
          vitae incidunt expedita quaerat! Eius, quia illum?
        </p>
      </div>
    </>
  );
};

export default IndexPage;
