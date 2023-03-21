//objeto:
const cipher = {
  //función encriptar
  encode: (offset, string) => {
    //console.log(typeof string);
    //console.log(typeof offset);
    let result = "";
    if (typeof offset !== "number" || typeof string !== "string") {
      throw TypeError ("Ingresa un número para desplazamiento y una cadena de texto para el mensaje");
    }

    for (let i= 0; i < string.length; i++) {

      //posición ascii
      let asciiPos = string.charCodeAt(i);
      //console.log(asciiPos);
      
      if (asciiPos >= 65 && asciiPos <=90){
        asciiPos = ((asciiPos - 65 + (offset))%26)+65;

      } else if (asciiPos >= 97 && asciiPos <= 122){
        asciiPos = ((asciiPos - 97 + (offset))%26)+97;
      }
      result += String.fromCharCode(asciiPos);
      //console.log(result);
      
    } return result;
  },
  //función desencriptar
  decode: (offset, string) => {
    //console.log(typeof string);
    //console.log(typeof offset);
    let result = "";
    if (typeof offset !== "number" || typeof string !== "string") {
      throw TypeError ("Ingresa un número para desplazamiento y una cadena de texto para el mensaje");
    }
    
    for (let i= 0; i < (string.length); i++) {
      //Posición ascii
      const asciiPos = string.charCodeAt(i);
      
      if (asciiPos >= 65 && asciiPos <=90){
        result += String.fromCharCode((((asciiPos - 65 - parseInt(offset) + 26)+26)%26)+65);

      } else if (asciiPos >= 97 && asciiPos <= 122){
        result += String.fromCharCode(((((asciiPos - 97 - parseInt(offset)) + 26)+26)%26)+97);
      }
    } return result;
  } 
}
export default cipher;
