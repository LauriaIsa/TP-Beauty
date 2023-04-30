function validarContacto() {
    let validar= validarNombre() && validarTelefono() && validarEmail() && validarMensaje();
    if(validar){
        alert("¡Gracias por contactarnos!");
        document.Form.submit();

    }
}

function validarNombre(){
    if(document.getElementById("nombre").value==""){
        document.getElementById("pNombre").style.display="block";
        return false;
    }
    else{
        document.getElementById("pNombre").style.display="none";
        return true;
    }
}

function validarTelefono(){
    if(document.getElementById("telefono").value==""){
        document.getElementById("pTelefono").style.display="block";
        return false;
    }
    else{
        document.getElementById("pTelefono").style.display="none";
        return true;
    }
}

function validarEmail(){
    if(document.getElementById("email").value==""){
        document.getElementById("pEmail").style.display="block";
        return false;
    }
    else{
        document.getElementById("pEmail").style.display="none";
        let valor=document.getElementById("email").value;
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(valor)) {
            document.getElementById("pEmailInvalido").style.display="none";
            return true;   
        }
        else{
            document.getElementById("pEmailInvalido").style.display="block";
            return false;
        }
    }
}

function validarMensaje(){
    if(document.getElementById("mensaje").value==""){
        document.getElementById("pMensaje").style.display="block";
        return false;
    }
    else{
        document.getElementById("pMensaje").style.display="none";
        return true;
    }
}
