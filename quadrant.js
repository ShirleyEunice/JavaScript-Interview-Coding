function check(num1, num2){
  if(num1 > 0 && num2 >0){
    return "Coordinate I";
  }else if(num1 < 0 && num2 > 0){
    return "Coordiante II";
  }else if(num1 < 0 && num2 < 0){
    return "Cordinate III";
  }else if(num1 > 0 && num2 < 0){
    return "Cordiante IV";
  }else if(num1 === 0 && num2 === 0){
    return "Origin";
  }else if (num1 !=0 && num2 === 0){
    return "x-axis";
  }else if (num1 === 0 && num2 !=0){
    return "y-axis";
  }
}
console.log(check(2, 4));
console.log(check(-5, 4));
console.log(check(2, 0));
console.log(check(4, -8));
console.log(check(0, 4));
console.log(check(0, 0));