//const range = document.getElementById("range").value;
//const mssg = document.getElementById("mssg").value;

const cipher = {
  encode: (range, mssg) => {
    for (var i= 0; i<(mssg.length); i++) {
      //Posición ascii
      const asciiPos = mssg.charCodeAt(i);
      //console.log("asciiPos");
      //Aplicar fórmula
      const ciphMssg = (asciiPos - 65 + range) % 26 + 26;

      //Transformar ascii a alfabeto
      const result = String.fromCharCode(ciphMssg);
    }
   return result;
  }
};

export default cipher;
