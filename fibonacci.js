function fibonacci(n){
  if(n === 0){
    return [];
  }else if (n === 1){
    return [0];
  }
  const set = [0,1];
  for (let i =2; i< n; i++)
  {
    set.push(set[i-1]+set[i-2]);
  }
  return set;
}
const num = 10;
const result=fibonacci(num);
console.log(result);