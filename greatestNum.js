function greatestNum(num1, num2){
  if(num1 > num2){
    return `${num1} is the greatest`;
  }else if(num2 > num1){
    return `${num2} is the greatest`;
  }else{
    return "Both are equal";
  }
}
console.log(greatestNum(12, 45));
console.log(greatestNum(23, 1));
console.log(greatestNum(5,5));