function longestPalindrome(arr){
  let palindrome = -1;

  for( let num of arr){
    if( isPalindrome(num) && num > palindrome){
      palindrome = num;
    }
  }
  return palindrome !== -1 ? palindrome : "No Palindrome Available";
}

function isPalindrome(num){
  let str = num.toString();
  return str === str.split("").reverse().join("");
}

console.log(longestPalindrome([121, 23322, 54545, 999990]));