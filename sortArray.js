function sortArray(arr){
  if(arr.length === 0) return "Empty";

  let temp = Infinity;
  for(let i = 0; i< arr.length; i++){
    for(let j =0; j < arr.length - i -1; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArray([23, 12, 78, 12,32]));