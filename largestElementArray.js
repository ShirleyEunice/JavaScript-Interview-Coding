function largestElement(num){
  if(num.length === 0)
    return "Array is empty";

  let max = num[0];
  for(let i =0; i<=num.length; i++){
    if(num[i] > max)
    {
      max = num[i];
    }
  }
  return max;
}
console.log(largestElement([23, 13, 21]));