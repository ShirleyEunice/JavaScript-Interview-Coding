function smallestlargestArray(arr){
  if(arr.length === 0) return "Empty";

  let min = arr[0];
  let max = arr[0];
  for(let i =1; i< arr.length; i++){
    if(max > arr[i]){
      max = arr[i];
    }
    if(min < arr[i]){
      min = arr[i];
    }
  }
  return {min, max};
}
console.log(smallestlargestArray([12, 23, 19]));