export const rupeeIn2Dec = (data) => {
  return data ? "\u20b9 " + parseFloat(data).toFixed(2) : "\u20b9 0";
};

export const numIn2Dec = (data) => {
  return data ? parseFloat(data).toFixed(2) : "";
};

export const value1Dec = (data) => {
  return data ? parseFloat(data).toFixed(2) : "";
};
