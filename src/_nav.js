import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilWallet,
  cilGroup,
  cilHistory,
  cilUser,
  cilSettings,
  cilAccountLogout,
} from "@coreui/icons";
import { CImage, CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

import { CM_Nav } from "./commons/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCog,
  faCogs,
  faExchangeAlt,
  faFileCode,
  faFileExport,
  faFileInvoice,
  faLaptopCode,
  faList,
  faPersonBooth,
  faRandom,
  faRupeeSign,
  faShieldAlt,
  faSignal,
  faUpload,
  faUser,
  faUsers,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

export const nav_admin = [
  // // {
  // //   component: CNavItem,
  // //   name: "Dashboard",
  // //   to: CM_Nav.DASHBOARD,
  // //   icon: (
  // //     <FontAwesomeIcon
  // //       size="sm"
  // //       icon={faChartLine}
  // //       style={{ marginRight: 22, marginLeft: 5 }}
  // //     />
  // //   ),
  // },
  {
    component: CNavItem,
    name: "Home",
    to: CM_Nav.HOME,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faChartLine}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Coupon",
    to: CM_Nav.COUPONS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faChartLine}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Transactions",
    to: CM_Nav.TRANSACTION,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRandom}
        style={{ marginRight: 23, marginLeft: 8 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "My QR Code",
    to: CM_Nav.MY_QR_CODE,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRandom}
        style={{ marginRight: 23, marginLeft: 8 }}
      />
    ),
  },
  // {
  //   component: CNavItem,
  //   name:"AEPS",
  //   to: CM_Nav.MY_AEPS,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faRandom}
  //       style={{ marginRight: 23, marginLeft: 8 }}
  //     />
  //   ),
  // },
 
  
  // {
  //   component: CNavGroup,
  //   name: "Users",
  //   to: CM_Nav.USERS,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faUser}
  //       style={{ marginRight: 22, marginLeft: 8 }}
  //     />
  //   ),
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Sub Admin",
  //       to: CM_Nav.SUB_ADMIN,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Accounts",
  //       to: CM_Nav.ACCOUNTS,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "On Boarding",
  //       to: CM_Nav.ON_BOARDING,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Technical",
  //       to: CM_Nav.TECHNICAL,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Merchants",
  //       to: CM_Nav.MERCHANTS,
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Load Money",
  //   to: CM_Nav.LOAD_MONEY,
  //   // icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faRupeeSign}
  //       style={{ marginRight: 26, marginLeft: 10 }}
  //     />
  //   ),
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Requests",
  //       to: CM_Nav.LOAD_MONEY_REQUESTS,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "History",
  //       to: CM_Nav.LOAD_MONEY_HISTORY,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Admin Credits",
  //       to: CM_Nav.ADMIN_CREDITS,
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Settings",
  //   to: CM_Nav.SETTINGS,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faCogs}
  //       style={{ marginRight: 22, marginLeft: 6 }}
  //     />
  //   ),
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Bank Commercials",
  //       to: CM_Nav.BANK_COMMERCIALS_SETTINGS,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Notifications",
  //       to: CM_Nav.NOTIFICATION_SETTINGS,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Support",
  //       to: CM_Nav.SUPPORT_SETTINGS,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Admin Services",
  //       to: CM_Nav.ADMIN_SERVICES,
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Risk",
  //   to: CM_Nav.RISK,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faShieldAlt}
  //       style={{ marginRight: 26, marginLeft: 8 }}
  //     />
  //   ),
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Block Accounts",
  //       to: CM_Nav.RISK_BLOCK_ACC,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Transactions",
  //       to: CM_Nav.RISK_TRANSACTIONS,
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Reports",
  //   to: CM_Nav.REPORTS,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faFileInvoice}
  //       style={{ marginRight: 26, marginLeft: 9 }}
  //     />
  //   ),
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Invoice",
  //       to: CM_Nav.INVOICE_REPORTS,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Reconcilation",
  //       to: CM_Nav.RECONCILATION,
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Downloads",
  //       to: CM_Nav.DOWNLOAD_REPORTS,
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: "Api Docs",
  //   to: CM_Nav.API_DOC,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faLaptopCode}
  //       style={{ marginRight: 20, marginLeft: 5 }}
  //     />
  //   ),
  // },
];

export const nav_technical = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: CM_Nav.DASHBOARD,
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faSignal}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: "Merchants",
    to: CM_Nav.MERCHANTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUsers}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Load Money",
    to: CM_Nav.LOAD_MONEY,
    // icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRupeeSign}
        style={{ marginRight: 26, marginLeft: 10 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Requests",
        to: CM_Nav.LOAD_MONEY_REQUESTS,
      },
      {
        component: CNavItem,
        name: "History",
        to: CM_Nav.LOAD_MONEY_HISTORY,
      },
      {
        component: CNavItem,
        name: "Admin Credits",
        to: CM_Nav.ADMIN_CREDITS,
      },
    ],
  },
  {
    component: CNavItem,
    name: "Transactions",
    to: CM_Nav.TRANSACTION_HISTORY,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faExchangeAlt}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Settings",
    to: CM_Nav.SETTINGS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faCog}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Bank Commercials",
        to: CM_Nav.BANK_COMMERCIALS_SETTINGS,
      },
      {
        component: CNavItem,
        name: "Notifications",
        to: CM_Nav.NOTIFICATION_SETTINGS,
      },
      {
        component: CNavItem,
        name: "Support",
        to: CM_Nav.SUPPORT_SETTINGS,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Reports",
    to: CM_Nav.REPORTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faFileExport}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Invoice",
        to: CM_Nav.INVOICE_REPORTS,
      },
      {
        component: CNavItem,
        name: "Reconcilation",
        to: CM_Nav.RECONCILATION,
      },
      {
        component: CNavItem,
        name: "Downloads",
        to: CM_Nav.DOWNLOAD_REPORTS,
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: "Api Docs",
  //   to: CM_Nav.API_DOC,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faFileCode}
  //       style={{ marginRight: 25, marginLeft: 10 }}
  //     />
  //   ),
  // },
];

export const nav_onboarding = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: CM_Nav.DASHBOARD,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faSignal}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Merchants",
    to: CM_Nav.MERCHANTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUsers}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Load Money",
    to: CM_Nav.LOAD_MONEY,
    // icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRupeeSign}
        style={{ marginRight: 26, marginLeft: 10 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "History",
        to: CM_Nav.LOAD_MONEY_HISTORY,
      },
      {
        component: CNavItem,
        name: "Admin Credits",
        to: CM_Nav.ADMIN_CREDITS,
      },
    ],
  },
  {
    component: CNavItem,
    name: "Transactions",
    to: CM_Nav.TRANSACTION_HISTORY,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faExchangeAlt}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Reports",
    to: CM_Nav.REPORTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faFileExport}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Invoice",
        to: CM_Nav.INVOICE_REPORTS,
      },
      {
        component: CNavItem,
        name: "Reconcilation",
        to: CM_Nav.RECONCILATION,
      },
      {
        component: CNavItem,
        name: "Downloads",
        to: CM_Nav.DOWNLOAD_REPORTS,
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: "Api Docs",
  //   to: CM_Nav.API_DOC,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faFileCode}
  //       style={{ marginRight: 25, marginLeft: 10 }}
  //     />
  //   ),
  // },
];

export const nav_accounts = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: CM_Nav.DASHBOARD,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faSignal}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Merchants",
    to: CM_Nav.MERCHANTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUsers}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Load Money",
    to: CM_Nav.LOAD_MONEY,
    // icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRupeeSign}
        style={{ marginRight: 26, marginLeft: 10 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "History",
        to: CM_Nav.LOAD_MONEY_HISTORY,
      },
      {
        component: CNavItem,
        name: "Admin Credits",
        to: CM_Nav.ADMIN_CREDITS,
      },
    ],
  },
  {
    component: CNavItem,
    name: "Transactions",
    to: CM_Nav.TRANSACTION_HISTORY,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faExchangeAlt}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Reports",
    to: CM_Nav.REPORTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faFileExport}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Invoice",
        to: CM_Nav.INVOICE_REPORTS,
      },
      {
        component: CNavItem,
        name: "Reconcilation",
        to: CM_Nav.RECONCILATION,
      },
      {
        component: CNavItem,
        name: "Downloads",
        to: CM_Nav.DOWNLOAD_REPORTS,
      },
    ],
  },
];

export const nav_merchants = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: CM_Nav.DASHBOARD,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faSignal}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Wallet",
    to: CM_Nav.WALLET,
    // icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRupeeSign}
        style={{ marginRight: 25, marginLeft: 10 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Beneficiaries",
    to: CM_Nav.MANAGE_BEN,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUsers}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Transactions",
    to: CM_Nav.TRANSACTION_HISTORY,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faExchangeAlt}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Bulk",
    to: CM_Nav.BULK,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUpload}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Beneficiaries",
        to: CM_Nav.BULK_BENEFICIARIES,
      },
      {
        component: CNavItem,
        name: "Transaction",
        to: CM_Nav.BULK_TXN,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Reports",
    to: CM_Nav.REPORTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faFileExport}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Invoice",
        to: CM_Nav.INVOICE_REPORTS,
      },
      {
        component: CNavItem,
        name: "Reconcilation",
        to: CM_Nav.RECONCILATION,
      },
      {
        component: CNavItem,
        name: "Downloads",
        to: CM_Nav.DOWNLOAD_REPORTS,
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: "Api Docs",
  //   to: CM_Nav.API_DOC,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faFileCode}
  //       style={{ marginRight: 25, marginLeft: 10 }}
  //     />
  //   ),
  // },
];

export const _nav = [
  // {
  //   component: CNavTitle,
  //   name: "Menu",
  // },
  {
    component: CNavItem,
    name: "Dashboard",
    to: CM_Nav.DASHBOARD,
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faSignal}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavGroup,
    name: "Users",
    to: CM_Nav.USERS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUsers}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Sub Admin",
        to: CM_Nav.SUB_ADMIN,
      },
      {
        component: CNavItem,
        name: "Accounts",
        to: CM_Nav.ACCOUNTS,
      },
      {
        component: CNavItem,
        name: "On Boarding",
        to: CM_Nav.ON_BOARDING,
      },
      {
        component: CNavItem,
        name: "Technical",
        to: CM_Nav.TECHNICAL,
      },
      {
        component: CNavItem,
        name: "Merchants",
        to: CM_Nav.MERCHANTS,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Load Money",
    to: CM_Nav.LOAD_MONEY,
    // icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRupeeSign}
        style={{ marginRight: 26, marginLeft: 10 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Requests",
        to: CM_Nav.LOAD_MONEY_REQUESTS,
      },
      {
        component: CNavItem,
        name: "History",
        to: CM_Nav.LOAD_MONEY_HISTORY,
      },
      {
        component: CNavItem,
        name: "Admin Credits",
        to: CM_Nav.ADMIN_CREDITS,
      },
    ],
  },
  {
    component: CNavItem,
    name: "Wallet",
    to: CM_Nav.WALLET,
    // icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faRupeeSign}
        style={{ marginRight: 25, marginLeft: 10 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Beneficiaries",
    to: CM_Nav.MANAGE_BEN,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUsers}
        style={{ marginRight: 22, marginLeft: 5 }}
      />
    ),
  },
  {
    component: CNavItem,
    name: "Transactions",
    to: CM_Nav.TRANSACTION_HISTORY,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faExchangeAlt}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
  },
  {
    component: CNavGroup,
    name: "Settings",
    to: CM_Nav.SETTINGS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faCog}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Bank Commercials",
        to: CM_Nav.BANK_COMMERCIALS_SETTINGS,
      },
      {
        component: CNavItem,
        name: "Notifications",
        to: CM_Nav.NOTIFICATION_SETTINGS,
      },
      {
        component: CNavItem,
        name: "Support",
        to: CM_Nav.SUPPORT_SETTINGS,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Bulk",
    to: CM_Nav.BULK,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faUpload}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Beneficiaries",
        to: CM_Nav.BULK_BENEFICIARIES,
      },
      {
        component: CNavItem,
        name: "Transaction",
        to: CM_Nav.BULK_TXN,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Reports",
    to: CM_Nav.REPORTS,
    icon: (
      <FontAwesomeIcon
        size="sm"
        icon={faFileExport}
        style={{ marginRight: 22, marginLeft: 8 }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: "Invoice",
        to: CM_Nav.INVOICE_REPORTS,
      },
      {
        component: CNavItem,
        name: "Reconcilation",
        to: CM_Nav.RECONCILATION,
      },
      {
        component: CNavItem,
        name: "Downloads",
        to: CM_Nav.DOWNLOAD_REPORTS,
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: "Api Docs",
  //   to: "/",
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavGroup,
  //       name: "Base",
  //       to: "/base",
  //       icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: "Accordion",
  //           to: "/base/accordion",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Breadcrumb",
  //           to: "/base/breadcrumbs",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Cards",
  //           to: "/base/cards",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Carousel",
  //           to: "/base/carousels",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Collapse",
  //           to: "/base/collapses",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "List group",
  //           to: "/base/list-groups",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Navs & Tabs",
  //           to: "/base/navs",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Pagination",
  //           to: "/base/paginations",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Popovers",
  //           to: "/base/popovers",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Progress",
  //           to: "/base/progress",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Spinners",
  //           to: "/base/spinners",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Tables",
  //           to: "/base/tables",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Tooltips",
  //           to: "/base/tooltips",
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavGroup,
  //       name: "Buttons",
  //       to: "/buttons",
  //       icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: "Buttons",
  //           to: "/buttons/buttons",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Buttons groups",
  //           to: "/buttons/button-groups",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Dropdowns",
  //           to: "/buttons/dropdowns",
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavGroup,
  //       name: "Forms",
  //       icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: "Form Control",
  //           to: "/forms/form-control",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Select",
  //           to: "/forms/select",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Checks & Radios",
  //           to: "/forms/checks-radios",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Range",
  //           to: "/forms/range",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Input Group",
  //           to: "/forms/input-group",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Floating Labels",
  //           to: "/forms/floating-labels",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Layout",
  //           to: "/forms/layout",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Validation",
  //           to: "/forms/validation",
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Charts",
  //       to: "/charts",
  //       icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavGroup,
  //       name: "Icons",
  //       icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: "CoreUI Free",
  //           to: "/icons/coreui-icons",
  //           badge: {
  //             color: "success",
  //             text: "NEW",
  //           },
  //         },
  //         {
  //           component: CNavItem,
  //           name: "CoreUI Flags",
  //           to: "/icons/flags",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "CoreUI Brands",
  //           to: "/icons/brands",
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavGroup,
  //       name: "Notifications",
  //       icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: "Alerts",
  //           to: "/notifications/alerts",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Badges",
  //           to: "/notifications/badges",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Modal",
  //           to: "/notifications/modals",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Toasts",
  //           to: "/notifications/toasts",
  //         },
  //       ],
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Widgets",
  //       to: "/widgets",
  //       icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //       badge: {
  //         color: "info",
  //         text: "NEW",
  //       },
  //     },
  //     {
  //       component: CNavTitle,
  //       name: "Extras",
  //     },
  //     {
  //       component: CNavGroup,
  //       name: "Pages",
  //       icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: "Login",
  //           to: "/login",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Register",
  //           to: "/register",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Error 404",
  //           to: "/404",
  //         },
  //         {
  //           component: CNavItem,
  //           name: "Error 500",
  //           to: "/500",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: "Log Out",
  //   to: CM_Nav.LOG_IN,
  //   icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: "Api Docs",
  //   to: CM_Nav.API_DOC,
  //   icon: (
  //     <FontAwesomeIcon
  //       size="sm"
  //       icon={faFileCode}
  //       style={{ marginRight: 25, marginLeft: 10 }}
  //     />
  //   ),
  // },
];

//export default _nav;
