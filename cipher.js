//objeto:
const cipher = {
  //función encriptar
  encode: (offset, string) => {
    //declarar variables para guardar los valores del index
    const offsetV = offset;
    const stringV = string;
    console.log(offsetV);
    console.log(stringV);
    let result = "";
    for (let i= 0; i < stringV.length; i++) {
      //posición ascii
      let asciiPos = stringV.charCodeAt(i);
      console.log(asciiPos);
      
      if (asciiPos >= 65 && asciiPos <=90){
        asciiPos = ((asciiPos - 65 + parseInt(offsetV))%26)+65;

      } else if (asciiPos >= 97 && asciiPos <= 122){
        asciiPos = ((asciiPos - 97 + parseInt(offsetV))%26)+97;
      }
      result += String.fromCharCode(asciiPos);
      console.log(result);
    } return result;
  },
  //función desencriptar
  decode: (offset, string) => {
    const offsetV = offset;
    const stringV = string;
    console.log(stringV);
    console.log(offsetV);
    let result = "";
    
    for (let i= 0; i < (stringV.length); i++) {
      //Posición ascii
      const asciiPos = stringV.charCodeAt(i);
      
      if (asciiPos >= 65 && asciiPos <=90){
        result += String.fromCharCode((((asciiPos - 65 - parseInt(offsetV) + 26)+26)%26)+65);
        //asciiPos = (((asciiPos - 65 - parseInt(offsetV) + 26)+26)%26)+65;

      } else if (asciiPos >= 97 && asciiPos <= 122){
        //asciiPos = ((((asciiPos - 97 - parseInt(offsetV)) + 26)+26)%26)+97;
        result += String.fromCharCode(((((asciiPos - 97 - parseInt(offsetV)) + 26)+26)%26)+97);
      }
      //result += String.fromCharCode(((((asciiPos - 97 - parseInt(offsetV)) + 26)+26)%26)+97);
      
    } return result;
  } 
}


export default cipher;
