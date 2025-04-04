function sortFrequency(arr){
  let frequency = {};

  //count frequency
  for( let num of arr){
    frequency[num] = (frequency[num] || 0) +1;
  }

  //sort the array
  return arr.sort((a, b) => {
    if(frequency[a] === frequency[b]){
      return a-b;
    }
    return frequency[b] - frequency[a];
  });
}
console.log(sortFrequency([30, 20, 30, 10, 20, 20]));