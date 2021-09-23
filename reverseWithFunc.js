function reverse(str){
  const tempStr = str.split(" ");
  let reverseStr = "";
  for(let i = 0; i < tempStr.length; i++){   
    reverseStr = reverseStr + tempStr[i].split("").reverse().join("")
    reverseStr = reverseStr + " ";
  }
  console.log(reverseStr);
  return reverseStr;
}
reverse("Hello World");
