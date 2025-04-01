function radiusOfCircle(radius){
  if(radius <=0){
    return "It should be greater than 0";
  }
  let pi = Math.PI;
  let result = pi * Math.pow(radius, 2);
  return result.toFixed(2);
}
console.log(radiusOfCircle(5));