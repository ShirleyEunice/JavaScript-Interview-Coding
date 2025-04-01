function check(num){
  let temp = num;
  let sum =0;
  for(let i =1; i<num;i++){
    if(num%i === 0){
      sum+=i;
    }
  }
  if(temp === sum){
    return "Perfect Number";
  }else{
    return "Not a Perfect Number";
  }
}
console.log(check(28));
console.log(check(15));