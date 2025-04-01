function addFractions(num1, den1, num2, den2){
  let commonDen = den1 * den2;

  let newNum1 = num1 * den2;
  let newNum2 = num2 * den1;

  finalNum = newNum1 + newNum2;

  let gcdValue = gcd(finalNum, commonDen);
  let simplifiedNum = finalNum/gcdValue;
  let simplifiedDen = commonDen/gcdValue;

  return `${simplifiedNum} / ${simplifiedDen}`;
}
function gcd(a, b){
  return b === 0 ? a : gcd(b, a%b);
}
console.log(addFractions(1, 3, 3, 9));