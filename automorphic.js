function check(num){
  let sqr = num * num;
  if(sqr % 10 === num){
    return "Automorphic Number";
  }else{
    return "Not an Automorphic Number";
  }
}
console.log(check(5));
console.log(check(7));