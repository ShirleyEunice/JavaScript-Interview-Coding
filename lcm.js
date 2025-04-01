function check(num1, num2){
  let hcf = gethcf(num1, num2);
  let lcm = (num1 * num2) / hcf;

  return lcm;
}

function gethcf(num1, num2){
  let hcf =0;
  for(let i=1; i<=num1 || i<=num2; i++){
    if(num1 % i === 0 && num2 % i === 0){
      hcf =i;
    }
  }
  return hcf;
}
console.log(check(12, 14));