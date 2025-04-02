function countInteger(num){
  let count =0;
  let str=num.toString();
  for(let i =0; i<=str.length; i++){
    if(str[i]){
      count++;
    }
  }
  return count;
}
console.log(countInteger(4572891053));