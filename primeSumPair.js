function primeSumPair(num){
  for(let i =2; i<= num/2; i++){
    if(isPrime(i) && isPrime(num-i)){
      return [i, num-i];
    }
  }
  return null;
}

function isPrime(num){
  if(num <=1){
    return false;
  }
  for(let i =2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
    return true;
  }
}
console.log(primeSumPair(10));