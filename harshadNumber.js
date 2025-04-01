function check(num){
  let temp =num;
  let sum =0;
  while(num!=0){
    let rem = num % 10;
    sum+=rem;
    num = Math.floor(num/10);

    if(temp % sum === 0){
      return "Harshad Number";
    }else{
      return "Not an Harshad Number";
    }
  }
  
}
console.log(check(21));
console.log(check(46));