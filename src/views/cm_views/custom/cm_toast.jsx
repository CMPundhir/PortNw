import axios from "axios";
import { postJsonData } from "src/networks/ApiController";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { store } from "src/utils/CMLocalStorage";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CRow,
  CSpinner,
} from "@coreui/react";
import { FormLabel } from "@material-ui/core";
import { useState } from "react";
import ApiEndpoints from "src/networks/ApiEndpoints";

export const Toast = Swal.mixin({
  confirmButtonColor: "#4093f7",
});

export const MySwal = withReactContent(Toast);

export const okErrorToast = (title, msg) => {
  Toast.fire(title, msg, "error");
};

export const apiErrorToast = (error, history) => {
  var msg;
  var status;
  if (error) {
    if (error.response) {
      status = error.response.status;
      if (error.response.data) {
        if (error.response.data.message) {
          msg = error.response.data.message;
        } else if (typeof error.response.data == "object") {
          msg = JSON.stringify(error.response.data);
        } else {
          msg = error.response.data;
        }
      } else {
        msg = JSON.stringify(error.response);
      }
    } else {
      if (error.message) {
        msg = error.message;
      } else {
        msg = JSON.stringify(error);
      }
    }
  }
  if (status == 401) {
    MySwal.fire({
      title: history ? "Login Required!!" : "Error!",
      text: msg,
      icon: "error", // 'success' | 'error' | 'warning' | 'info' | 'question'
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Login",
      showConfirmButton: history,
      showLoaderOnConfirm: history,
      preConfirm: () => {},
      allowOutsideClick: () => !Swal.isLoading(),
      backdrop: true,
    }).then((result) => {
      if (history) {
        localStorage.clear();
        store.clear().then((v) => {
          history.push("/login");
        });
      }
    });
  } else {
    Toast.fire(
      "Error " + (status ? " : " + status : ""),
      msg ? msg : "Error can't be identified",
      "error"
    );
  }
};

export const okSuccessToast = (title, msg) => {
  Toast.fire(title, msg, "success");
};

export const confirmationDialog = (
  title,
  subTitle,
  endpoint,
  data,
  OnSuccess,
  isRemarkReq = true
) => {
  var msg;
  MySwal.fire({
    title: title,
    text: subTitle,
    input: isRemarkReq ? "text" : null,
    inputPlaceholder: "Enter remarks",
    icon: "warning", // 'success' | 'error' | 'warning' | 'info' | 'question'
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
    inputValidator: (remark) => {
      if (isRemarkReq && !remark) {
        return "Please add valid remark";
      }
    },
    showLoaderOnConfirm: true,
    preConfirm: (remark) => {
      if (isRemarkReq) data.remark = remark;
      return postJsonData(
        endpoint,
        data,
        (progress) => {},
        (data) => {
          msg = data;
        },
        (error) => {
          var msg;
          var status;
          if (error) {
            if (error.response) {
              status = error.response.status;
              if (error.response.data) {
                if (error.response.data.message) {
                  msg = error.response.data.message;
                }
                if (error.response.data.exception) {
                  msg = error.response.data.exception;
                } else {
                  msg = error.response.data;
                }
              } else {
                msg = JSON.stringify(error.response);
              }
            } else {
              if (error.message) {
                msg = error.message;
              } else {
                msg = JSON.stringify(error);
              }
            }
          }
          if (typeof msg == "object") {
            msg = JSON.stringify(msg);
          }
          const er =
            "Error " +
            (status ? " : " + status + " " : "") +
            (msg ? msg : "Error can't be identified");
          Swal.showValidationMessage(`Request failed : ${er}`);
        }
      );
    },
    allowOutsideClick: () => !Swal.isLoading(),
    backdrop: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: msg ? msg : "Success",
      });
      OnSuccess();
    }
  });
};

export const showCopyDialog = (title, data) => {
  MySwal.fire({
    title: title,
    text: data,
    icon: "success", // 'success' | 'error' | 'warning' | 'info' | 'question'
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Copy",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      console.log(`${title} => ${data}`);
    },
    allowOutsideClick: () => !Swal.isLoading(),
    backdrop: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${title} copied successfully`,
      });
    }
  });
};
