function check(num){
  let sum =0;
  let temp =num;
  for(let i =1; i<num;i++){
    if(num % i ===0){
      sum+=i;
    }
  }
  if(sum > temp){
    return "Abundant Number";
  }else{
    return "Not an Abundant Number";
  }
}
console.log(check(18));
console.log(check(9));