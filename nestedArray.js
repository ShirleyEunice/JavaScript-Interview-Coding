function nested(arr){
  let max = -Infinity;
  function help(nestedArray){
    for(let item of nestedArray){
      if(typeof item === 'number'){
        max = Math.max(max,item);
      }else if(Array.isArray(item)){
        help(item);
      }
    }
  }
  help(arr);
  return max;
}
const nest = [1. [2,3], [4,5], 6, [7,8]];
const result = nested(nest);
console.log(result);