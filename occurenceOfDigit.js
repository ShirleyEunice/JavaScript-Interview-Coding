function occurenceOfDigit(num, rep){
  let count =0;
  while(num > 0){
    let rem = num % 10;
    if(rem === rep){
      count++;
    }
    num =Math.floor(num/10);
  }
  return count;
}
console.log(occurenceOfDigit(8988, 8));