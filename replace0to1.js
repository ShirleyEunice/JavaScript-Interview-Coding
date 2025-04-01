function replace0to1(num){
  let str1="";
  let str = num.toString();

  for(let i =0; i< str.length; i++){
    if(str.charAt(i) === "0"){
      str1 += "1";
    }else{
      str1 += str.charAt(i);
    }
  }
  return str1;
}
console.log(replace0to1(706120678));
