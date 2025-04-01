function power(base, pow){
  let res = 1;
  while(pow !=0){
    res= res * base;
    pow--;
  }
  return res;
}
console.log(power(5, 2));