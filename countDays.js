function countDays(year, mon){
  let month = [30, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
  if(isLeap && mon === 2){
    return 29;
  }

  return month[mon - 1];
}
console.log(countDays(2012, 12));