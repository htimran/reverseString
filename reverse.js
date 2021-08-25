function reverse(str){
  const tempStr = str.split(" ");
  let reverseStr = "";
  for(let i = 0; i < tempStr.length; i++){
    for(let j = tempStr[i].length -1; j >= 0 ; j--){    
      reverseStr= reverseStr + tempStr[i][j]; 
    }
    reverseStr = reverseStr + " ";
  }
  console.log(reverseStr);
  return reverseStr;
}
reverse("Hello World");
