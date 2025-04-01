function check(num1, num2){
  let sum1 = friendlypair(num1);
  let sum2 = friendlypair(num2);
  if(sum1 /num1 ===  sum2 / num2){
    return "Friendly Pair";
  }else{
    return "Not a Friendly Pair";
  }
}
function friendlypair(num){
  let sum =0;
  for(let i=1; i<num; i++){
    if(num % 10 === 0)
    sum+=i;
  }
  return sum;
}
console.log(check(6, 28));