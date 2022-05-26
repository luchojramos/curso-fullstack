///////////////********ahora mezclo for e if */
//imprimo en el html todos los numeros pares
//hasta el numero que ingrese el usuario
let numerazo = parseInt(prompt("Ingrese un numero"));

for(let d=0;d<=numerazo;d++){
    if(d%2==0){ //SELECCIONO LOS NROS PARES
        document.write(`<p> ${d}</p>`); 
    }
}
