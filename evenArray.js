function evenArray(arr){
  let evenArr=[];
  for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const result =  evenArray(array);
console.log(result);