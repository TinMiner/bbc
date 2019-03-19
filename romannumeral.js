// javascript oop solution

class RomanNumeralGenerator {

// generate Method
generate(num) {
if (typeof num !== 'number') 
return false; 
  
// of course console.log can be replaced with document.write to show in the browser

if (num >= 1 && num < 4000 ) {
  var digits = String(+num).split(""),
  key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  "","I","II","III","IV","V","VI","VII","VIII","IX"],
  roman_num = "",
  i = 3;
  while (i--)
  roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
  return console.log(Array(+digits.join("") + 1).join("M") + roman_num);
  }
  else {
     var errorMess = "Out of permitted range";
     return console.log(errorMess);
  }
}

}

// test the function either side of range and the maximum
let rn = new RomanNumeralGenerator;
rn.generate(0);
rn.generate(4000);
rn.generate(3999);