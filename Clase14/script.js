
let texto = "", textoIngresado = ""
do {
    textoIngresado = prompt("Ingrese mensaje o cancelar para terminar: ")
    if( textoIngresado != null) {
        texto += textoIngresado + " "
    }
} while(textoIngresado != null)

alert(texto)



