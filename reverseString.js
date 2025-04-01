function revStr(str)
{
    let rev ="";
    for(let i = str.length-1; i>=0; i--)
    {
      rev +=str[i];
    }
    return rev;
}
const string = "shirley";
const result = revStr(string);
console.log(result);