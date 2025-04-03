function reverseArray(num){
  if(num.length === 0) return "Empty";
let rev = []
  for(let i = num.length-1; i>=0; i--){
    rev.push(num[i]);
  }
  return rev;
}
console.log(reverseArray([1, 2, 3]));