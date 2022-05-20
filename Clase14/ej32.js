

let precioInicial = parseFloat( prompt("Ingrese precio: "))
let iva = parseInt( prompt("Ingrese porcentaje IVA: ") )
let precioFinal = 0;


if ( Number.isNaN(iva) ){
    iva = 21
}
console.log("IVA= "+iva)
precioFinal = precioInicial * (1+iva/100)
console.log("Precio= "+precioFinal)
alert("PRECIO FINAL: "+  precioFinal.toFixed(2))