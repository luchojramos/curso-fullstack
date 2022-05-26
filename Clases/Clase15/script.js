let nombres = ["pepe", "julieta", "maria",  "polenta", "titan"]

nombres.push("magenta")  //agrego al final
nombres.unshift("jose") //agrego al principio
console.log(nombres)

//let testJoin = nombres.join(".")
//console.log(testJoin)

let eliminado = nombres.shift() // eliminado el primero
console.log(nombres)
let eliminado2 = nombres.pop()
console.log(nombres)
console.log(eliminado,eliminado2)

nombres.splice(1,2)
console.log(nombres)

nombres.splice(1,1,"pedro")
console.log(nombres)

let otroArray = [1,2,3,4]

nombres = nombres.concat(otroArray)
console.log(nombres)

nombres.push(otroArray)
console.log(nombres)
console.log(nombres[7][2])

let numeros = [11,546,3,87,98,23]

numeros.sort()  //ordena de manera alfabetica
console.log(numeros)

numeros.sort(function(a,b){return a-b})
console.log(numeros)

let letras = "texto reee largo la verdad no se que poner"
let vocales = "aeiou"
let contador = 0
for(let i=0; i<letras.length; i++){
    if( vocales.includes(letras[i]) ){
        contador++;
    }
}
console.log(contador)