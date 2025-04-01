function leap(num){
  if(num % 400 === 0){
    return "Leap Year";
  }else if(num % 4 === 0 && num % 100 !== 0){
    return "Leap Year";
  }else{
    return "Not a Leap Year";
  }
}
console.log(leap(2024));
console.log(leap(2000));
console.log(leap(2015));