export const BASE_URL = "https://api.RoseCharge.co/api/";
// export const BASE_URL = "https://api.github.com/";
//export const BASE_URL = "https://apigateway.impsguru.com/";

const ApiEndpoints = {
  SIGN_IN: "user/login",
  REGISTER: "user/register",
  VERIFY_USER: "user/verifyOtpCode",
  CREATE_COUPON: "user/createCoupon",
  LIST_COUPON: "user/getCouponList",
  SHOW_COUPON: "user/showCoupon",

  //SIGN_IN: "auth/signIn",
  GET_TOKEN: "auth/getToken",
  GET_ME_USER: "user/getUser",
  GET_TRANSACTIONS: "getTransactions",
  GET_BENEFICIERIES: "getBeneficieries",
  GET_CREDITREQ: "getCreditReq",
  GET_CREDITREQ_ADMIN: "getCreditReqAdmin",
  GET_ADMIN_CREDITS: "getAdminTransfer",
  GET_USERS: "getUsers",
  ADD_USER: "addUser",
  EDIT_USER: "updateUser",
  BLOCK_UNBLOCK: "blockUnblock",
  CHANGE_PASS_VIA_ADMIN: "changePasswordAdmin",
  UPDATE_WALLET_ADMIN: "updateWallet",
  GET_FLOAT: "getFloat",
  GET_WALLET_IMPSGURU: "getWalletImpsGuru",
  GET_WALLET_YESBANK: "getWalletYesBank",
  GET_WALLET_IMONEY: "getWalletImoney",
  GET_WALLET_PAYTM: "getWalletPaytm",
  LOAD_MONEY_REQ: "loadMoneyReq",
  APPROVE_REJECT_REQ: "approveRejectReq",
  ADD_BENEFICIARY: "addBeneficiary",
  UPDATE_BENEFICIARY: "updateBeneficiary",
  DELETE_BENEFICIARY: "deleteBeneficiary",
  FUND_TRANSFER: "payOutWeb",
  CHANGE_PASSWORD: "changePassword",
  CHANGE_MPIN: "changeMPin",
  TRANSACTION_REPORT: "transactionReport",
  API_TOKEN: "apiToken",
  HASH_KEY: "hashKey",
  CHANGE_TOKEN: "changeToken",
  CHANGE_KEY: "changeKey",
  ADMIN_DASH_DATA: "adminDashData", // type = [TODAY, THIS, LAST]
  TYPE_WISE_BANK_DATA: "typeWiseData", // type = [TODAY, THIS, LAST]
  DELETE_IP: "removeIp",
  EDIT_WEBHOOK: "webHook",
  ADD_NEW_IP: "whitelistIp",
  UPDATE_CHARGES: "updateUserCommercials",
  GET_BANK_COMMERCIALS: "bankCommercials",
  EDIT_BANK_COMMERCIALS: "editBankCommercials",
  NEW_BANK: "newBank",
  UPDATE_ROUTES: "updateRoutes",
  CHECK_TXN_STATUS: "checkTransactionStatus", // id
  REFUND_TXN: "refund", // id
  ROLLBACK_TXN: "rollback", // id
  SUCCESS_TXN: "success", // id
  ADMIN_SUMMARY: "adminSummary", // id
  SERVICE_STATUS: "serviceStatus",
  CHANGE_SERVICE_STATUS: "serverMode",
  GET_BULK_TXN_TEMPLATE: "bulkTemplate",
  UPLOAD_BULK_FILE: "uploadBulkFile",
  RISK_ACCOUNTS: "addSearchDeleteAcc", // type = [LIST, ADD, DELETE, SEARCH], accNumber
  CREATE_VIRTUAL_ACCOUNTS: "createVa", // bank = {YBL, RBL}
  SHOW_VIRTUAL_ACCOUNTS: "showVA", // bank = {YBL, RBL, ALL}
  CHANGE_API_MODE: "apiMode", // userId
  Val_Tk: "vT", // userId
  FORGOT_PASSWORD: "forgetPassword",

  // github api endpoints . . . .
  GET_USER_GITHUB: "users/",
};

export default ApiEndpoints;
