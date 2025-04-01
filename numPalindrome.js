function numPalindrome(num){
  let temp = num
  let reverse =0;
  while(num !=0){
    let rem = num % 10;
    reverse= reverse * 10 + rem;
    num = Math.floor(num /10);
  }
  if(temp === reverse){
    return "Palindrome"
  }else{
    return "Not a Palindrome";
  }
}
console.log(numPalindrome(1223));