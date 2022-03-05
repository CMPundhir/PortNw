import React from "react";

import settings_png from "src/assets/images/icons/settings.png";
import pass_png from "src/assets/images/icons/password.png";
import { getButton } from "./custom/cm_views";
import { getPage } from "./custom/cm_views";
import { getGhostBtn } from "./custom/cm_views";
import { CMPage } from "./custom/cm_views";

const SettingView = ({ user }) => {
  return (
    <>
    <CMPage
      title="Reports"
      actions={[]}>
        <h4 className='m-4'>Coming soon...</h4>
    </CMPage>
    </>
  );
};

export default SettingView;
