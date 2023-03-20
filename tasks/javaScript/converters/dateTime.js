
var dateTimeBasic = new Date();
var dd = dateTimeBasic.getDay();
var mm = dateTimeBasic.getMonth();
var yyyy = dateTimeBasic.getFullYear();
var output = [];

   // if hh < 0 add 0 .
   dd = dd < 10 ? "0" + dd : dd;
   mm = mm < 10 ? "0" + mm : mm;
   yyyy = yyyy < 10 ? "0" + yyyy : yyyy;

output.push (dd);
output.push (mm);
output.push (yyyy);

console.log(output);
