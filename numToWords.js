function numToWords(num){
  let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if(num === 0) return "zero";
  if(num < 10) return ones[num];
  if(num < 20) return teens[num - 10];
  if(num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");
  if(num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 !== 0 ? " " + numToWords(num % 100) : "");
  if(num < 10000) return ones[Math.floor(num / 1000)] + " thousand" + (num % 1000 !== 0 ? " " + numToWords(num % 1000) : "");

  return "Too Large";
}

console.log(numToWords(1453));  // "one thousand four hundred fifty three"
console.log(numToWords(9999));  // "nine thousand nine hundred ninety nine"
console.log(numToWords(0));     // "zero"
console.log(numToWords(12));    // "twelve"
console.log(numToWords(85));    // "eighty five"
