function prime(n){
  if(n <= 1){
    return false;
  }else
  {
    for(let i =2; i*i<=n; i++)
    {
      if(n % i === 0){
        return false;
      }
    }
    return true;
  }
}
const num = 6;
const result = prime(num);
if(result){
  console.log("It is a Prime");
}else{
  console.log("It is not a prime");
}