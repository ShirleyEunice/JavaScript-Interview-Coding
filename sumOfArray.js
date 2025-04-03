function sumOfArray(num){
  if(num.length === 0) return "Empty";

  let sum =0;
  for(let i=0; i<= num.length; i++){
    if(num[i])
    {
      sum+=num[i];
    }
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3]));