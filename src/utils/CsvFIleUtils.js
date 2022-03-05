import jsPDF from "jspdf";
import XLSX from "xlsx";

export const json2Csv = (fileName, data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  console.log(worksheet);
  const csv = XLSX.utils.sheet_to_csv(worksheet)
  //console.log(csv);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const writingOptions = {
    bookType: "csv"
  }
  XLSX.writeFile(workbook, `${fileName}.csv`, writingOptions);
};

export const json2Pdf = (fileName, data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  console.log(worksheet);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const writingOptions = {
    bookType: "html"
  }
  const html = XLSX.utils.sheet_to_txt(worksheet);
  const doc = new jsPDF();
  doc.text(data, 10, 10)
  doc.save("html_test.pdf");
  //XLSX.writeFile(workbook, `${fileName}.pdf`);
};

export const json2Excel = (fileName, data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  console.log(worksheet);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};