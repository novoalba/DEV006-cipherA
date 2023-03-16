import cipher from './cipher.js';

//declarar variables en index.js:
const offset = document.getElementById("range")//.value;
const string = document.getElementById("mssg")//.value//;
const result = document.getElementById("result");

//en el index.js declaramos todo lo que vaya ligado al html:
const buttonE = document.getElementById("cyphBtn")
buttonE.addEventListener("click", ()=>{
  console.log(offset.value, string.value);
  result.innerHTML = cipher.encode(offset,string);
});

const buttonD = document.getElementById("decyphBtn")
buttonD.addEventListener("click", ()=>{
  
  result.innerHTML = cipher.decode(offset,string);
});

const buttonGB = document.getElementById("goBack")
buttonGB.addEventListener("click",()=>{
  history.go(0);
});

//necesitamos aclarar función y variables usadas:
cipher.encode(offset, string);
cipher.decode(offset, string);


