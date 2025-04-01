function palindrome(n){
  const reversedStr = n.split("").reverse().join("");
  return reversedStr;
}
const str = "racecar";
const result = palindrome(str);
if(result){
  console.log("Palindrome");
}else{
  console.log("Not a Palindrome");
}