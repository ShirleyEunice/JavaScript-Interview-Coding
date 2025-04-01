function fibonnaci(num){
  let series = [0, 1];
  for(let i = 2; i<num; i++){
    series.push(series[i-1]+series[i-2]);
  }
  return series;
}
console.log(fibonnaci(4));