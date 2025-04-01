function primeFactor(num){
  //even least prime number check
  let ans=[];
  while(num %2 === 0){
    ans.push(2);
    num=Math.floor(num/2);
  }
//for odd number
  for(let i =3; i*i <=num; i+=2){
    if(num % i === 0){
      ans.push(i);
      num=Math.floor(num/i);
    }
  }
//check prime number
  if(num > 2){
    ans.push(num);
  }
  return ans;

}
console.log(primeFactor(12));
console.log(primeFactor(48));