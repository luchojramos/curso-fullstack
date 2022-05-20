let acum = Number();
let nuevoNro = "";
console.log(typeof acum, typeof nuevoNro);

do {
    nuevoNro = prompt("Ingrese un nro: ");
    if (nuevoNro == "") {
        break;
    } else {
        //console.log("NRO STR: ", nuevoNro, typeof(nuevoNro))

        nroEntero = parseInt(nuevoNro);
        //console.log("NRO ENTERO: ",nroEntero, typeof(nroEntero))

        if (Number.isNaN(nroEntero)) {
            alert("No es un nro");
        } else {
            acum += nroEntero;
            //console.log("ACUM: ", acum, typeof(acum))
        }
    }
} while (nuevoNro != null);

alert("Suma ACUMULADA: " + acum);
