import Axios from "axios";
import { StoreKey } from "src/commons/Constants";
import ApiEndpoints, { BASE_URL } from "src/networks/ApiEndpoints";
import { saveKeyVal } from "src/utils/CMLocalStorage";
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import { getValue } from "src/utils/CMLocalStorage";

const cache = new LRU({ max: 10 });

export const axios = Axios.create({
  baseURL: BASE_URL,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
    //api_token: localStorage.getItem("qik_token"),
  },
});

export const useAx = (endpoint) => {
  return useAxios(endpoint);
};
configure({ axios, cache });

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //console.log(config);
    config.headers["Content-Type"] = "application/json";
    getValue(
      StoreKey.TOKEN,
      (token) => {
        config.headers["api_token"] = token;
      },
      (err) => {}
    );
    //alert("Token set");
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   function (response) {
//     // Do something before request is sent
//     console.log("response: ", response);
//     return response;
//   },
//   function (error) {
//     // Do something with request error
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

const onInValidAuth = (error, next) => {
  if (error.response && error.response.status === 403) {
    //alert(error.response.data.error);
  }
  //alert("error " + error);
  if (next) next(error);
};

export const loginApi = (uname, paswd, setIsProgress, onSuccess, onError) => {
  setIsProgress(true);
  axios
    .post(ApiEndpoints.SIGN_IN, {
      mobile: uname,
      password: paswd,
    })
    .then((response) => {
      setIsProgress(false);
      //alert(JSON.stringify(response.data, null, 2));
      const data = response.data;
      if (data) {
        //alert(data.api_token)
        const token = data.api_token;
        postJsonData(
          ApiEndpoints.GET_ME_USER,
          {
            api_token: token,
          },
          setIsProgress,
          (data) => {
            const user = data.info;
            localStorage.setItem("api_token", user.api_token);
            saveKeyVal(
              StoreKey.TOKEN,
              token,
              (msg) => {
                saveKeyVal(
                  StoreKey.USER,
                  user,
                  (msg) => {
                    onSuccess(user);
                  },
                  (err) => {
                    alert(err);
                  }
                );
              },
              (err) => {
                alert(err);
                onError(err);
              }
            );
          },
          (error) => {
            onError(error);
          }
        );
      } else {
        onError("User data null : " + data);
      }
    })
    .catch((error) => {
      setIsProgress(false);
      onError(error);
    });
};

export const getInstitutionList = (setIsProgress, onSuccess, onError) => {
  setIsProgress(true);
  axios
    .get(ApiEndpoints.ALL_INSTITUTE, {})
    .then((response) => {
      const user = response.data;
      onSuccess(user);
      setIsProgress(false);
    })
    .catch((error) => {
      setIsProgress(false);
      onInValidAuth(error, onError);
    });
};

export const postFormData = (
  endpoint,
  formData,
  setIsProgress,
  onSuccess,
  onError
) => {
  setIsProgress(true);
  axios
    .post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem("token"),
      },
    })
    .then((response) => {
      const data = response.data;
      onSuccess(data);
      setIsProgress(false);
    })
    .catch((error) => {
      setIsProgress(false);
      onInValidAuth(error, onError);
    });
};

export const putFormData = (
  id,
  endpoint,
  formData,
  setIsProgress,
  onSuccess,
  onError
) => {
  console.log("putFormData invoked");
  console.log(formData);
  setIsProgress(true);
  axios
    .put(endpoint + "/" + id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "auth-token": localStorage.getItem("token"),
      },
    })
    .then((response) => {
      const data = response.data;
      onSuccess(data);
      setIsProgress(false);
    })
    .catch((error) => {
      setIsProgress(false);
      onInValidAuth(error, onError);
    });
};

export const putJsonData = (
  endpoint,
  jsonData,
  setIsProgress,
  onSuccess,
  onError
) => {
  setIsProgress(true);
  axios
    .put(endpoint, jsonData, {
      headers: {
        "Content-Type": "application/json",
        api_token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      const data = response.data;
      onSuccess(data);
      setIsProgress(false);
    })
    .catch((error) => {
      setIsProgress(false);
      onInValidAuth(error, onError);
    });
};

export const postJsonData = (
  endpoint,
  jsonData,
  setIsProgress,
  onSuccess,
  onError
) => {
  if (setIsProgress) setIsProgress(true);
  //console.log("data => "+JSON.stringify(jsonData))
  return axios
    .post(endpoint, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (setIsProgress) setIsProgress(false);
      const data = response.data;
      onSuccess(data);
    })
    .catch((error) => {
      if (setIsProgress) setIsProgress(false);
      onInValidAuth(error, onError);
    });
};

export const deleteJsonData = (
  endpoint,
  jsonData,
  setIsProgress,
  onSuccess,
  onError
) => {
  setIsProgress(true);
  axios
    .delete(endpoint, jsonData, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
    .then((response) => {
      const data = response.data;
      onSuccess(data);
      setIsProgress(false);
    })
    .catch((error) => {
      setIsProgress(false);
      onInValidAuth(error, onError);
    });
};

export const getRequest = (
  endpoint,
  token,
  setIsProgress,
  onSuccess,
  onError
) => {
  if (setIsProgress) setIsProgress(true);
  axios
    .get(endpoint, {
      params: {
        api_token: token,
      },
    })
    .then((response) => {
      const data = response.data;
      onSuccess(data);
      if (setIsProgress) setIsProgress(false);
    })
    .catch((error) => {
      if (setIsProgress) setIsProgress(false);
      onInValidAuth(error, onError);
    });
};

export const get = (endpoint, setIsProgress, onSuccess, onError) => {
  if (setIsProgress) setIsProgress(true);
  axios
    .get(endpoint)
    .then((response) => {
      const data = response.data;
      onSuccess(data);
      if (setIsProgress) setIsProgress(false);
    })
    .catch((error) => {
      if (setIsProgress) setIsProgress(false);
      onInValidAuth(error, onError);
    });
};
