function primeRange(num1, num2){
  for( let num=num1; num <=num2; num++){
    if(isPrime(num)){
      console.log(num);
    }
  }
}

function isPrime(num){
  if(num <= 1){
    return false;
  }else
  for(let i = 2; i*i <=(num);i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

console.log(primeRange(2, 10));
