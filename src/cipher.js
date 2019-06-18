window.cipher = {
 encode :(offset,string) => {
   let result = '';
   for (let i = 0; i<string.length;i++) {
     let ascii = string.charCodeAt(i);
     if(ascii >= 65 && ascii <= 90){
       let asciiOffset = (ascii-65 + offset) %26 +65;
       let newtext = String.fromCharCode (asciiOffset);
       result += newtext;
     }else if(ascii >= 97 && ascii <=122){
      let asciiOffset = (ascii-97 + offset) %26 + 97;
      let newtext = String.fromCharCode (asciiOffset);
      result += newtext; 
     }else{
       result += string[i];
     }
   } return result;
 },
 decode:(offset,string) => {
  let result = '';
  for (let i = 0; i<string.length;i++) {
    let ascii = string.charCodeAt(i);
    if(ascii >= 65 && ascii <= 90){
      let asciiOffset = (ascii-65 - offset +52) %26 + 65;
      let newtext = String.fromCharCode (asciiOffset);
      result += newtext;
    }else if(ascii >= 97 && ascii <=122){
     let asciiOffset = (ascii-97 - offset +52) %26 + 97;
     let newtext = String.fromCharCode (asciiOffset);
     result += newtext; 
    }else{
      result += string[i];
    }
  } return result;

 }
}