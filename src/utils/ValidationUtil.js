export const isValidMobile = (m) => {
  return m.length == 10 && 5999999999 < m && m < 9999999999;
};

export const isValidPass = (p) => {
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,24}$/;
  return regularExpression.test(p);
};
