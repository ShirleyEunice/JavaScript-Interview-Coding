function secondsmallestArray(arr){
  if(arr.length === 0) return "Empty";

  let min = arr[0];
  for(let i =0; i<= arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  let secmin = Infinity;

  for(let i=0; i<= arr.length; i++){
    if(arr[i] !== min && arr[i] < secmin){
      secmin = arr[i];
    }
  }
  return secmin === Infinity ? "Not second small element" : secmin;
}
console.log(secondsmallestArray([32, 24, 12]));