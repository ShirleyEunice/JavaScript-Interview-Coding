function armstrongRange(num){
  let temp = num;
  let sum=0;
  let len= num.toString().length;

  while(num !=0){
    let rev = num%10;
    sum+= Math.pow(rev, len);
    num = Math.floor(num/10);
  }
  return temp === sum;
}
function range(num1, num2){
  let armstrongnumber = [];
  for(let i = num1; i<=num2; i++){
    if(armstrongRange(i)){
      armstrongnumber.push(i);
    }
  }
  return armstrongnumber;
}

console.log(range(10, 1000));