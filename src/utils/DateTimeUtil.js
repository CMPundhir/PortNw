var options = {
  hour: "numeric",
  hour12: false,
  minute: "numeric",
  //   weekday: "long",
  //   year: "numeric",
  month: "short",
  day: "numeric",
  second: "numeric"
};

var options2 = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

var options3 = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

export const myDate = (dateObj) => {
  return new Date(dateObj).toLocaleDateString("en-US", options);
};

export const myDate2 = (dateObj) => {
  return new Date(dateObj)
    .toLocaleDateString("en-US", options2)
    .replace("/", "_")
    .replace(" ", "_")
    .replace(",", "_");
};

export const myDate4 = (dateObj) => {
  if(dateObj){
    const d = new Date(dateObj);
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }else{
    return "";
  }
};

export const myDate3 = (dateObj) => {
  return new Date(new Date(dateObj));
};

export const myDate5 = (dateObj) => {
  const d = new Date(dateObj);
  return d.getDate()+"/"+(d.getMonth() + 1);
};

export const myDateMMyy = (dateObj) => {
  const d = new Date(dateObj);
  let m = (d.getMonth() + 1)
  m = m<10 ? "0"+m : m;
  let y = d.getFullYear()%100
  return m+"/"+y;
};
