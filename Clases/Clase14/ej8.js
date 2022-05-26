let textoIngr = "", res = ""

textoIngr = prompt("Ingrese texto: ")

res = textoIngr[0]
for(let i=1; i<(textoIngr.length); i++) {
    // console.log("i="+i)
    res += "-" + textoIngr[i]
}

alert(res)