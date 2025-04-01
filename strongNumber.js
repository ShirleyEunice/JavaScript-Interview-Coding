function factor(num){
  fact = 1
  for(let i=1;i<=num;i++){
    fact*=i;
  }
  return fact;
}

function check(num){
  let sum=0;
  let temp = num;
  while(num !=0){
    let rem = num %10;
    sum+= factor(rem);
    num=Math.floor(num/10);
  }
  if(temp === sum){
    return "Strong Number";
  }else{
    return "Not a Strong Number";
  }
}
console.log(check(145));
console.log(check(123));