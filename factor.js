function factor(num){
  let ans =""
  for(let i=1; i<=num; i++){
    if(num % i === 0){
      ans+= i +" ";
    }
  }
  return ans;
}
console.log(factor(10));