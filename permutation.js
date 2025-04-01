function permutation(n, r){
  let cal = n - r;
  let fact1 =1;
  for(let i =1; i<=n; i++){
    fact1*= i;
  }
  let fact2=1;
  for(let i =1; i<=cal; i++){
    fact2 *= i;
  }
  return Math.floor(fact1/fact2);
}
console.log(permutation(5, 9));