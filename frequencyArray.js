function frequencyArray(arr){
  let frequency = {};
  for(let i =0 ; i< arr.length; i++){
    if(frequency[arr[i]]){
      frequency[arr[i]]++; //increment if already exists
    }else{
      frequency[arr[i]] = 1; //initialixe count
    }
  }
  return frequency;
}
console.log(frequencyArray([10, 30, 10, 20, 10, 20, 30, 10]));