import cipher from './cipher.js';

//declarar variables en index.js:
const offset = document.getElementById("range");
const string = document.getElementById("mssg");
//const result = document.getElementById("resulted").value;

//en el index.js declaramos todo lo que vaya ligado al html:
const buttonE = document.getElementById("cyphBtn")
buttonE.addEventListener("click", ()=>{
  document.getElementById("resulted").innerHTML = cipher.encode(offset.value,string.value);
});

const buttonD = document.getElementById("decyphBtn")
buttonD.addEventListener("click", ()=>{
  
  document.getElementById("resulted").innerHTML = cipher.decode(offset.value,string.value);
});

const buttonGB = document.getElementById("goBack")
buttonGB.addEventListener("click",()=>{
  history.go(0);
});

//necesitamos aclarar función y variables usadas:
//cipher.encode(offset, string);
//cipher.decode(offset, string);
