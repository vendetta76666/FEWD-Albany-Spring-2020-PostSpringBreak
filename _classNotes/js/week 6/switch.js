var dinner = "fried dinosuar";

switch (dinner) {
  case "salad":
    console.log("salad for dinner");
    break;
  case "fried dinosuar":
    console.log("fried dinosuar for dinner");
    break;
  case "fried chicken":
    console.log("yummy!");
    break;
  default:
    console.log("no dinner for you!");
}




var file = "myTaxes.pdf";
console.log(file.indexOf("."));
var ext = file.substring(file.indexOf("."), file.length);

console.log(ext);

switch (ext) {
  case ".xls":
    console.log("please upload ... ");
    break;
  case ".xlsx":
    console.log("thank you for upgrading!");
    break;
  case ".csv":
    console.log("please upload to database");
    break;
  default:
    console.log("no dinner for you!");
}
