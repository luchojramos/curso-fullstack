let sendForm = function() {
    console.log("Boton ENVIAR Presionado")

    let nombre = document.getElementById("nombreApellido").value
    //console.log(nombre)
    let email = document.getElementById("email").value
    console.log(email)
    let mensaje = document.getElementById("mensaje").value
    //console.log(mensaje)

    email = email.split("")
    console.log(email)
    
    
    if ( nombre == "" || email == "" || mensaje == "" ) {
        alert("Complete los campos requeridos")
    }
    else if( ! email.some( e => e == "@" ) ) {
        alert("Ingrese un e-mail válido")
    }
    else {
        alert("Formulario enviado!")
        window.location.href = 'formsent.html';
    }
    
}



let clearFields = function() {
    console.log("Boton CLEAR Presionado")
    document.getElementById("email").value = null;
    document.getElementById("nombreApellido").value = null;
    document.getElementById("mensaje").value = null;

}





let botonEnviar = document.getElementById("enviar-btn")
botonEnviar.addEventListener("click", sendForm)

let botonClear = document.getElementById("clear-btn")
botonClear.addEventListener("click", clearFields)

