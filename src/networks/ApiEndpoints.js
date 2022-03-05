export const BASE_URL = "https://api.apexpay.co.in/";
//export const BASE_URL = "https://api.imoneypay.in/";

const ApiEndpoints = {
  SIGN_IN: "signIn",
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
};

export default ApiEndpoints;
