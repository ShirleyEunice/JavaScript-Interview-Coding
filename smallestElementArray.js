function smallestElementArray(arr){
  if(arr.length === 0){
    return "Array is Empty";
  }
  let min = arr[0];

  for(let i =0; i<= arr.length; i++){
    if(arr[i] < min)
    {
      min = arr[i];
    }
  }
  return min;
}
const a = [32, 123, 21];
console.log(smallestElementArray(a));