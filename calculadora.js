//Recuperacion de los componentes de la página
let inV1 = document.getElementById("v1");
let inV2 = document.getElementById("v2");
let formulario= document.getElementsByTagName("form")[0];
let presultado= document.querySelector("p.text");

//Asignacion del evento al formulario
formulario.addEventListener("submit", function(e){
e.preventDefault();
let v1= parseInt(inV1.value);
let v2= parseInt(inV2.value);

let suma= v1+v2;
let resta= v1-v2;
let mult= v1*v2;
let divis= v1/v2;


presultado.innerText= "Suma: "+suma+ "\nResta:"+resta+ "\nMult:"+mult+"\nDivis:"+divis;
console.log(suma);
console.log(resta);
console.log(mult);
console.log(divis);


});