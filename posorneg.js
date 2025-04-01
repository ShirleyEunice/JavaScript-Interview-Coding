function checkNum(num){
  if(num >0){
    return "positive";
  }else if(num < 0){
    return "negative";
  }else{
    return "zero";
  }
}
console.log(checkNum(23));
console.log(checkNum(-9));
console.log(checkNum(0));