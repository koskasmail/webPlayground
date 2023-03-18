var dateTimeBasic = new Date();
var dateTimeBasic = '2022-12-05T16:43:21.840Z'

var output = [];
var dd = dateTimeBasic.getDay();
var mm = dateTimeBasic.getMonth();
var yyyy = dateTimeBasic.getFullYear();

   // if hh < 0 add 0 .
   dd = dd < 10 ? "0" + dd : dd;
   mm = mm < 10 ? "0" + mm : mm;
   yyyy = yyyy < 10 ? "0" + yyyy : yyyy;

output.push (dd);
output.push (mm);
output.push (yyyy);

console.log(output);
