function upperCase(str){
  const words = str.split(" ");
  const capital = words.map(word =>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capital.join(" ");
}
const str= "hello world";
const result = upperCase(str);
console.log(result);