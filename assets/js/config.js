const miFormulario = document.querySelector("#Login")

function eventoSubmit(evento) {
        evento.preventDefault()
        const inputs = evento.target.elements;     
        const usuario = inputs["usuario"].value;
        const contraseña = inputs["contraseña"].value;
        
        const elementoCaja = document.querySelector("#caja")
        
        if(contraseña == "admin" && usuario == "admin"){
            elementoCaja.textContent = "Acceso Aprovado";
            window.location.href = 'Users'
        }else{
            elementoCaja.textContent = "Acceso denegado";
        }       
}

miFormulario.addEventListener('submit', eventoSubmit)