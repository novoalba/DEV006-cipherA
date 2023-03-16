//objeto:
const cipher = {
  //función encriptar
  encode: (offset, string) => {
    //declarar variables para guardar los valores del index
    const offsetV = offset || 10;
    const stringV = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" || "";
    let result = "";
    console.log(stringV.length);
    for (let i= 0; i < stringV.length; i++) {
      //posición ascii
      let asciiPos = stringV.charCodeAt(i);
      
      if (asciiPos >= 65 && asciiPos <=90){
        asciiPos = ((asciiPos - 65 + parseInt(offsetV))%26)+65;

      } else if (asciiPos >= 97 && asciiPos <= 122){
        asciiPos = ((asciiPos - 97 + parseInt(offsetV))%26)+97;
      }
      result += String.fromCharCode(asciiPos);
    } return result;
  },
  //función desencriptar
  decode: (offset, string) => {
    const offsetV = offset.value || "";
    const stringV = string.value || "";
    //console.log = (stringV);
    let result = "";
    
    for (let i= 0; i < (stringV.length); i++) {
      //Posición ascii
      let asciiPos = stringV.charCodeAt(i);
      
      if (asciiPos >= 65 && asciiPos <=90){
        asciiPos = (((asciiPos - 65 - parseInt(offsetV) + 26)+26)%26)+65;

      } else if (asciiPos >= 97 && asciiPos <= 122){
        asciiPos = ((((asciiPos - 97 - parseInt(offsetV)) + 26)+26)%26)+97;
      }
      result += String.fromCharCode(asciiPos);
      
    } 
    console.log(result);
    return result;
  } 
}


export default cipher;
