// function validar(valor){
//     while( isNaN(valor) || valor==null || valor=="" ){
//         alert("por favor ingresa un nro")
//         valor = prompt("Ingrese su nota de vuelta: ")
//     }
//     return Number(valor)
// }


// function leerNotas(){
//     let promedio=0
//     let cont = 0
//     let nota = 0
    
//     while(!Number.isNaN(nota)){
        
//         if( ( nota = validar(prompt("Ingrese su nota")) ) == -1){
//             break;
//         }
//         else{
//             promedio += nota
//             cont++
//         }
//     }
//     promedio /= cont
//     alert("el promedio es "+promedio)

// }


// leerNotas()


//--------------------------------------------
// FUNCIONES DECLARATIVAS: funcionan con hoysting (se guardan en memoria y se pueden llamar antes o despues)
function sumar(a,b){
    return a+b
}

//FUNCION EXPRESIVA: se debe llamar mas abajo y no se guarda en memoria
let suma = function(a,b) {

}

//FUNCION ANONIMA
let suma1 = (a,b) => {
    return a+b
}

//___________ METODOS DE ARRAYS _________


////    foreach    /////
let array = [1,2,3,4,5,6,7,8]
let prom = 0
array.forEach(elemento => {console.log(elemento)}) 
/*
Le asigno el nombre "elemento" a cada uno, pongo la flecha y digo dentro de
la funcion anonima lo que quiero hacer con cada "elemento"
*/

array.forEach(aux => {
    prom += aux
}) 
console.log(prom/array.length)


///////////   [boolean] every  (todos deben cumplir)   //////  ver si todos son < 6
console.log(array.every(n => n < 6))

/// [boolean] some (al menos uno debe cumplir) /// ver si alguno es mayor a 5
console.log(array.some( n => n > 5))

/// map (genera otro array) ////
let pares = [2,4,6,8,10,12]
let impares = pares.map(n => n + 1)
console.log(impares)


///  [elemento] find (busca el primero que cumpla la funcion)
let buscar = pares.find( l => l > 5)
console.log(buscar)

///  [elemento] filter (busca TODOS los que cumpla la funcion)
let pollo = pares.filter( x => x  > 4)
console.log(pollo)

///   reduce ( tiene un ACUMULADOR y el ELEM. hace la operacion que determines)
let numerito = [1,2,3,4]
let res = numerito.reduce( (acumulador, elem) => acumulador + elem )
console.log(res)