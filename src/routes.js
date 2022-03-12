import React from "react";
import { CM_Nav } from "./commons/Constants";
import MasterCrRequestView from "./views/cm_views/admin_cr_rq/MasterCrRequestView";
import BulkBeneficiaryView from "./views/cm_views/bullk/BulkBeneficiaryView";
import BulkTransactionView from "./views/cm_views/bullk/BulkTransactionView";
import DownloadReportView from "./views/cm_views/reports/DownloadReportView";
import InvoiceReportsView from "./views/cm_views/reports/InvoiceReportsView";
import ReconReportView from "./views/cm_views/reports/ReconReportView";
import ServicesView from "./views/cm_views/settings/ServicesView";
import RiskAccountsView from "./views/cm_views/RiskAccountsView";
import RiskTransactionView from "./views/cm_views/RiskTransactionView";

const Dashboard = React.lazy(() =>
  import("src/views/cm_views/dashboard/DashboardView")
);
const DashboardOld = React.lazy(() =>
  import("src/views/cm_views/DashboardView")
);
const HomeView = React.lazy(() =>
  import("src/views/cm_views/home/HomeView")
);
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);

// // Base
// const Accordion = React.lazy(() =>
//   import("./views/components/base/accordion/Accordion")
// );
// const Breadcrumbs = React.lazy(() =>
//   import("./views/components/base/breadcrumbs/Breadcrumbs")
// );
// const Cards = React.lazy(() => import("./views/components/base/cards/Cards"));
// const Carousels = React.lazy(() =>
//   import("./views/components/base/carousels/Carousels")
// );
// const Collapses = React.lazy(() =>
//   import("./views/components/base/collapses/Collapses")
// );
// const ListGroups = React.lazy(() =>
//   import("./views/components/base/list-groups/ListGroups")
// );
// const Navs = React.lazy(() => import("./views/components/base/navs/Navs"));
// const Paginations = React.lazy(() =>
//   import("./views/components/base/paginations/Paginations")
// );
// const Popovers = React.lazy(() =>
//   import("./views/components/base/popovers/Popovers")
// );
// const Progress = React.lazy(() =>
//   import("./views/components/base/progress/Progress")
// );
// const Spinners = React.lazy(() =>
//   import("./views/components/base/spinners/Spinners")
// );
// const Tables = React.lazy(() =>
//   import("./views/components/base/tables/Tables")
// );
// const Tooltips = React.lazy(() =>
//   import("./views/components/base/tooltips/Tooltips")
// );

// // Buttons
// const Buttons = React.lazy(() =>
//   import("./views/components/buttons/buttons/Buttons")
// );
// const ButtonGroups = React.lazy(() =>
//   import("./views/components/buttons/button-groups/ButtonGroups")
// );
// const Dropdowns = React.lazy(() =>
//   import("./views/components/buttons/dropdowns/Dropdowns")
// );

// //Forms
// const ChecksRadios = React.lazy(() =>
//   import("./views/components/forms/checks-radios/ChecksRadios")
// );
// const FloatingLabels = React.lazy(() =>
//   import("./views/components/forms/floating-labels/FloatingLabels")
// );
// const FormControl = React.lazy(() =>
//   import("./views/components/forms/form-control/FormControl")
// );
// const InputGroup = React.lazy(() =>
//   import("./views/components/forms/input-group/InputGroup")
// );
// const Layout = React.lazy(() =>
//   import("./views/components/forms/layout/Layout")
// );
// const Range = React.lazy(() => import("./views/components/forms/range/Range"));
// const Select = React.lazy(() =>
//   import("./views/components/forms/select/Select")
// );
// const Validation = React.lazy(() =>
//   import("./views/components/forms/validation/Validation")
// );

// const Charts = React.lazy(() => import("./views/components/charts/Charts"));

// // Icons
// const CoreUIIcons = React.lazy(() =>
//   import("./views/components/icons/coreui-icons/CoreUIIcons")
// );
// const Flags = React.lazy(() => import("./views/components/icons/flags/Flags"));
// const Brands = React.lazy(() =>
//   import("./views/components/icons/brands/Brands")
// );

// // Notifications
// const Alerts = React.lazy(() =>
//   import("./views/components/notifications/alerts/Alerts")
// );
// const Badges = React.lazy(() =>
//   import("./views/components/notifications/badges/Badges")
// );
// const Modals = React.lazy(() =>
//   import("./views/components/notifications/modals/Modals")
// );
// const Toasts = React.lazy(() =>
//   import("./views/components/notifications/toasts/Toasts")
// );

//const Widgets = React.lazy(() => import("./views/components/widgets/Widgets"));

// CM Actions
const AdminCreditReqListView = React.lazy(() =>
  import("./views/cm_views/admin_cr_rq/AdminCreditReqListView")
);
const CrRequestHisView = React.lazy(() =>
  import("./views/cm_views/admin_cr_rq/CrRequestHisView")
);
const CrRequestView = React.lazy(() =>
  import("./views/cm_views/admin_cr_rq/CrRequestView")
);
const UserCrRqListView = React.lazy(() =>
  import("./views/cm_views/UserCrRqListView")
);
const UsersView = React.lazy(() => import("./views/cm_views/users/UsersView"));
const SubAdminsView = React.lazy(() =>
  import("./views/cm_views/users/SubAdminView")
);
const AccountsView = React.lazy(() =>
  import("./views/cm_views/users/AccountsView")
);
const MerchantView = React.lazy(() =>
  import("./views/cm_views/users/MerchantView")
);
const OnBoardingView = React.lazy(() =>
  import("./views/cm_views/users/OnBoardingView")
);
const TechnicalView = React.lazy(() =>
  import("./views/cm_views/users/TechnicalView")
);
const ManageBen = React.lazy(() => import("./views/cm_views/ManageBenView"));

// CM Transactions
const TransactionHis = React.lazy(() =>
  import("./views/cm_views/TransactionHisView")
);

// CM Views
const ProfileView = React.lazy(() => import("./views/cm_views/ProfileView"));
const SettingView = React.lazy(() =>
  import("./views/cm_views/settings/SettingView")
);
const BankCommercialsView = React.lazy(() =>
  import("./views/cm_views/settings/BankCommercialsView")
);
const NotificationView = React.lazy(() =>
  import("./views/cm_views/settings/NotificationView")
);
const SupportView = React.lazy(() =>
  import("./views/cm_views/settings/SupportView")
);
const ReportsView = React.lazy(() => import("./views/cm_views/ReportsView"));
const LoginView = React.lazy(() => import("./views/pages/auth/LoginView"));
const ApiDocView = React.lazy(() => import("./views/cm_views/ApiDocView"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // { path: "/theme", name: "Theme", component: Colors, exact: true },
  // { path: "/theme/colors", name: "Colors", component: Colors },
  // { path: "/theme/typography", name: "Typography", component: Typography },
  // { path: "/base", name: "Base", component: Cards, exact: true },
  // { path: "/base/accordion", name: "Accordion", component: Accordion },
  // { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  // { path: "/base/cards", name: "Cards", component: Cards },
  // { path: "/base/carousels", name: "Carousel", component: Carousels },
  // { path: "/base/collapses", name: "Collapse", component: Collapses },
  // { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  // { path: "/base/navs", name: "Navs", component: Navs },
  // { path: "/base/paginations", name: "Paginations", component: Paginations },
  // { path: "/base/popovers", name: "Popovers", component: Popovers },
  // { path: "/base/progress", name: "Progress", component: Progress },
  // { path: "/base/spinners", name: "Spinners", component: Spinners },
  // { path: "/base/tables", name: "Tables", component: Tables },
  // { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  // { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  // { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  // { path: "/buttons/dropdowns", name: "Dropdowns", component: Dropdowns },
  // {
  //   path: "/buttons/button-groups",
  //   name: "Button Groups",
  //   component: ButtonGroups,
  // },
  // { path: "/charts", name: "Charts", component: Charts },
  // { path: "/forms", name: "Forms", component: FormControl, exact: true },
  // { path: "/forms/form-control", name: "Form Control", component: FormControl },
  // { path: "/forms/select", name: "Select", component: Select },
  // {
  //   path: "/forms/checks-radios",
  //   name: "Checks & Radios",
  //   component: ChecksRadios,
  // },
  // { path: "/forms/range", name: "Range", component: Range },
  // { path: "/forms/input-group", name: "Input Group", component: InputGroup },
  // {
  //   path: "/forms/floating-labels",
  //   name: "Floating Labels",
  //   component: FloatingLabels,
  // },
  // { path: "/forms/layout", name: "Layout", component: Layout },
  // { path: "/forms/validation", name: "Validation", component: Validation },
  // { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  // { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  // { path: "/icons/flags", name: "Flags", component: Flags },
  // { path: "/icons/brands", name: "Brands", component: Brands },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   component: Alerts,
  //   exact: true,
  // },
  // { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  // { path: "/notifications/badges", name: "Badges", component: Badges },
  // { path: "/notifications/modals", name: "Modals", component: Modals },
  // { path: "/notifications/toasts", name: "Toasts", component: Toasts },
  // { path: "/widgets", name: "Widgets", component: Widgets },

  { path: CM_Nav.USERS, name: "Users", component: UsersView },
  {
    path: CM_Nav.SUB_ADMIN,
    name: "Sub Admins",
    component: SubAdminsView,
  },
  {
    path: CM_Nav.ACCOUNTS,
    name: "Account Users",
    component: AccountsView,
  },
  {
    path: CM_Nav.ON_BOARDING,
    name: "On Boarding Users",
    component: OnBoardingView,
  },
  {
    path: CM_Nav.MERCHANTS,
    name: "Merchants",
    component: MerchantView,
  },
  {
    path: CM_Nav.TECHNICAL,
    name: "Technical Users",
    component: TechnicalView,
  },
  {
    path: CM_Nav.LOAD_MONEY,
    name: "Load-Money",
    component: AdminCreditReqListView,
  },
  {
    path: CM_Nav.LOAD_MONEY_REQUESTS,
    name: "Load-Money-Request",
    component: CrRequestView,
  },
  {
    path: CM_Nav.LOAD_MONEY_HISTORY,
    name: "Load-Money-History",
    component: CrRequestHisView,
  },
  {
    path: CM_Nav.ADMIN_CREDITS,
    name: "Admin-Credits",
    component: MasterCrRequestView,
  },
  { path: CM_Nav.WALLET, name: "Wallet", component: UserCrRqListView },
  {
    path: CM_Nav.MANAGE_BEN,
    name: "Manage-Beneficiaries",
    component: ManageBen,
  },
  {
    path: CM_Nav.TRANSACTION_HISTORY,
    name: "Transaction-History",
    component: TransactionHis,
  },
  {
    path: CM_Nav.MY_PROFILE,
    name: "Profile",
    component: ProfileView,
  },
  {
    path: CM_Nav.SETTINGS,
    name: "Settings",
    component: SettingView,
  },
  {
    path: CM_Nav.ADMIN_SERVICES,
    name: "Admin Services",
    component: ServicesView,
  },
  {
    path: CM_Nav.BANK_COMMERCIALS_SETTINGS,
    name: "Bank Commercials Settings",
    component: BankCommercialsView,
  },
  {
    path: CM_Nav.NOTIFICATION_SETTINGS,
    name: "Notifications",
    component: NotificationView,
  },
  {
    path: CM_Nav.SUPPORT_SETTINGS,
    name: "Support",
    component: SupportView,
  },
  {
    path: CM_Nav.REPORTS,
    name: "Reports",
    component: ReportsView,
  },
  {
    path: CM_Nav.INVOICE_REPORTS,
    name: "Invoice Reports",
    component: InvoiceReportsView,
  },
  {
    path: CM_Nav.RECONCILATION,
    name: "Reconciliation",
    component: ReconReportView,
  },
  {
    path: CM_Nav.DOWNLOAD_REPORTS,
    name: "Download",
    component: DownloadReportView,
  },
  {
    path: CM_Nav.API_DOC,
    name: "Api-Doc",
    component: ApiDocView,
  },
  {
    path: CM_Nav.BULK_BENEFICIARIES,
    name: "Bulk Beneficiaries",
    component: BulkBeneficiaryView,
  },
  {
    path: CM_Nav.BULK_TXN,
    name: "Bulk Transactions",
    component: BulkTransactionView,
  },
  {
    path: CM_Nav.RISK_BLOCK_ACC,
    name: "Risk Accounts",
    component: RiskAccountsView,
  },
  {
    path: CM_Nav.RISK_TRANSACTIONS,
    name: "Risk Transactions",
    component: RiskTransactionView,
  },
  {
    path: CM_Nav.LOG_OUT,
    name: "LogOut",
    component: LoginView,
  },
  {
    path: CM_Nav.DASHBOARDOLD,
    name: "Dashboard Old",
    component: DashboardOld,
  },
  {
    path: CM_Nav.HOME,
    name: "Home",
    component: HomeView,
  },
];

export default routes;
