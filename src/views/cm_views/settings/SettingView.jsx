import React from "react";

import settings_png from "src/assets/images/icons/settings.png";
import { CMPage } from "../custom/cm_views";

const SettingView = ({ user }) => {
  return (
    <>
    <CMPage
      title="Settings"
      img={settings_png}
      actions={[]}
      body={null}
    />
    </>
  );
};

export default SettingView;
