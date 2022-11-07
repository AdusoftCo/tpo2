const valorTik = 200;

let discEstu = 80;
let discTrain = 50;
let discJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let total = document.getElementById("total");
let resumen = document.getElementById("resumen");

function total_pagar() {    
    if (nombre.value === "" || /^\s+$/.test(nombre)) {
        alert('[ERROR] El campo debe tener un nombre valido');
        nombre.focus();
        return;
    }   

    if (apellido.value === "" || /^\s+$/.test(apellido)) {
        alert('[ERROR] El campo debe tener un apellido valido');
        apellido.focus();
        return;
    }

    if (mail.value === "" || emailRegex.test(mail)) {
        alert('[ERROR] El campo debe tener un mail valido');
        mail.focus();
        return;
    }
    
    if ((cantidad.value == 0) || (isNaN(cantidad.value)) ) {
        alert('[ERROR] Elija cantidad de Tickets !');
        cantidad.focus();
        return;
    }
    
    if (categoria.value === "") {
        alert('[ERROR] El campo debe tener un valor numerico');
        categoria.focus();
        return;
    }

    let totalValTik = cantidad.value * valorTik;

    if (categoria.value == 0) {
        totalValTik = totalValTik;
    }
    if (categoria.value == 1) {
        totalValTik = totalValTik - (discEstu / 100 * totalValTik);
    }
    if (categoria.value == 2) {
        totalValTik = totalValTik - (discTrain / 100 * totalValTik);
    }
    if (categoria.value == 3) {
        totalValTik = totalValTik - (discJunior / 100 * totalValTik);
    }   
        
    total.innerHTML = totalValTik;
}

resumen.addEventListener('click', total_pagar);

function reset_total_pagar() {
    total.innerHTML = "";
}

borrar.addEventListener('click', reset_total_pagar);


/*window.onload = function () {
    document.formi.resumen.onclick = escribir
}*/