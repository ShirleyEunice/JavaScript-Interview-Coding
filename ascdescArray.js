function ascdescArray(arr){
  if(arr.length === 0) return "Empty";

  let mid = Math.floor(arr.length/2);
  let temp = Infinity;

  for(let i =0 ; i < mid; i++){
    for(let j=0; j < mid -1; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }



  for(let i =mid; i < arr.length; i++){
    for(let j = mid; j < arr.length - 1; j++){
      if(arr[j] < arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
  }

  console.log(ascdescArray([21, 23, 14, 45, 21, 64]));
