let unh2 = document.querySelector(".clase1")  //busco como si fuese CSS
// "etiqueta" ".class" "#id"
//TRAE EL PRIMER ELEMENTO Q ENCUNETRA
let otroh2 = document.querySelector("h2")
//console.log(unh2)
//console.log(otroh2)


let primerCaja = document.querySelector("#container1")
let cajita1 = primerCaja.querySelector(".caja")
//console.log(cajita1)

let todasLasCajas = document.querySelectorAll(".caja")
//console.log(todasLasCajas)
todasLasCajas.forEach( a => a.style.color="red")

let lista2 = document.getElementById("lista2")
let items = lista2.querySelectorAll("li")
console.log(items)