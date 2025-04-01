function check(num){
  let sq = Math.sqrt(num);
  if(sq * sq === num){
    return "Perfect Square";
  }else{
    return "Not a Perfect Square";
  }
}
console.log(check(64));
console.log(check(126));
console.log(check(45));