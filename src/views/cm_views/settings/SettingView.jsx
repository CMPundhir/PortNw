import React from "react";

import settings_png from "src/assets/images/icons/settings.png";
import { CMPage } from "../custom/cm_views";
import TransparentCard from "src/commons/cards/TransparentCard";

const SettingView = ({ user }) => {
  return (
    <>
      <CMPage title="Settings" img={settings_png} actions={[]} body={null} />
    </>
  );
};

export default SettingView;
