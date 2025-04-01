function primeNumberRange(num){
  let prime = [];
  for(let i = 2; i<= num; i++){
    if(isPrime(i)){
      prime.push(i);
    }
  }
  return prime;
}
function isPrime(num){
  if(num <= 1){
    return false;
  }
  for(let i = 2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
console.log(primeNumberRange(100));