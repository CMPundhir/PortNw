import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { CBadge } from "@coreui/react";

export const AppSidebarNav = ({ items }) => {
  const location = useLocation();
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    var isActive = location.pathname === rest.to;
    console.log(`${index} ${name}`);
    return (
      <div
        style={
          isActive
            ? {
                border: "solid #fff",
                borderLeftWidth: 3,
                borderRightWidth: 3,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                marginTop: 8,
                marginBottom: 8,
                borderRadius: 8,
                backgroundColor: "#4093f7",
                color: "white",
              }
            : { marginTop: 8, marginBottom: 8 }
        }
        key={index}
      >
        <Component
          {...(rest.to &&
            !rest.items && {
              component: NavLink,
              activeClassName: "active",
            })}
          key={index}
          {...rest}
        >
          {navLink(name, icon, badge)}
        </Component>
      </div>
    );
  };
  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <div key={index} style={{ marginTop: 16, marginBottom: 16 }}>
        <Component
          idx={String(index)}
          key={index}
          toggler={navLink(name, icon)}
          visible={location.pathname.startsWith(to)}
          {...rest}
        >
          {item.items?.map((item, index) =>
            item.items ? navGroup(item, index) : navItem(item, index)
          )}
        </Component>
      </div>
    );
  };

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
