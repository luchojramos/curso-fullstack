let calcular = function(){
    let texto = document.getElementById("texto").value
    let letra = document.getElementById("letra").value
    let cant = ""

    console.log(texto)
    console.log(letra)

    texto = texto.split("")
    console.log(texto)

    cant = texto.filter(e => e==letra )
    console.log(cant.length)

    alert("Esta "+ cant.length + " veces")
}

let boton = document.getElementById("calc")
boton.addEventListener("click",calcular)

