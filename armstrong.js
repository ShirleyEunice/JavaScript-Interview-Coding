function armstrong(num){
  let sum =0;
  let len = num.toString().length;
  let temp = num;

  while(num != 0){
    let rem = num %10;
    sum += Math.pow(rem, len);
    num = Math.floor(num/10);
  }
  if(sum === temp){
    return "Armstrong";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  }else{
    return "Not an Armstrong";
  }
}
console.log(armstrong(155));