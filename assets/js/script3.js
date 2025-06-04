let registros = [];

function validar() {
    let eTelefono = document.getElementById("telefono");
    let vTelefono = eTelefono.value;
    let eErrorTelefono = document.getElementById("errorTelefono");

    let eContraseña = document.getElementById("password");
    let vContraseña = eContraseña.value;
    let eErrorContraseña = document.getElementById("errorPassword");

    eErrorTelefono.textContent = "";
    eErrorContraseña.textContent = "";

    let esValido = true;

    if (vTelefono.length !== 8) {
        eErrorTelefono.innerText = "Se debe ingresar exactamente 8 dígitos";
        eTelefono.style.backgroundColor = "red";
        eTelefono.style.color = "black";
        esValido = false;
    } else {
        eTelefono.style.backgroundColor = "green";
        eTelefono.style.color = "blue";
    }

    if (vContraseña.length <= 5) {
        eErrorContraseña.innerText = "La contraseña debe tener más de 5 caracteres";
        eContraseña.style.backgroundColor = "red";
        eContraseña.style.color = "black";
        esValido = false;
    } else {
        eContraseña.style.backgroundColor = "green";
        eContraseña.style.color = "blue";
    }

    if (!esValido) return;

    let r = {
        telefono: vTelefono,
        contraseña: vContraseña
    };

    registros.push(r);

    eTelefono.value = "";
    eContraseña.value = "";

    ingresarregistro();
}

function ingresarregistro() {
    let eCuerpoTabla = document.getElementById("cuerpoTabla");
    let registrosMap = registros.map((u, index) => {
        return `<tr>
            <td>${u.telefono}</td>
            <td>${u.contraseña}</td>
            <td>
                <button onclick='EliminarRegistro(${index})'>Eliminar</button>
                <button onclick='formularioActualizarRegistro(${index})'>Actualizar</button>
            </td>
        </tr>`;
    });

    eCuerpoTabla.innerHTML = registrosMap.join("");
}

function EliminarRegistro(indice) {
    let confirmacion = confirm("¿Seguro de eliminar este registro?");
    if (!confirmacion) return;
    registros = registros.filter((_, index) => index !== indice);
    ingresarregistro();
}

function formularioActualizarRegistro(indice) {
    let r = registros[indice];
    document.getElementById("telefono1").value = r.telefono;
    document.getElementById("contraseña1").value = r.contraseña;
    document.getElementById("BotonActualizar").setAttribute('data-indice', indice);

    document.getElementById("formActualizar").style.display = 'block';
}

function ActualizarRegistro() {
    let indice = parseInt(document.getElementById("BotonActualizar").getAttribute('data-indice'));
    let eTelefono = document.getElementById("telefono1");
    let eContraseña = document.getElementById("contraseña1");
    let vTelefono = eTelefono.value;
    let vContraseña = eContraseña.value;

    let eErrorTelefono1 = document.getElementById("errorTelefono1");
    let eErrorContraseña1 = document.getElementById("errorContraseña1");

    eErrorTelefono1.textContent = "";
    eErrorContraseña1.textContent = "";

    let esValido = true;

    if (vTelefono.length !== 8) {
        eErrorTelefono1.innerText = "Se debe ingresar exactamente 8 dígitos";
        eTelefono.style.backgroundColor = "red";
        eTelefono.style.color = "black";
        esValido = false;
    } else {
        eTelefono.style.backgroundColor = "green";
        eTelefono.style.color = "blue";
    }

    if (vContraseña.length <= 5) {
        eErrorContraseña1.innerText = "La contraseña debe tener más de 5 caracteres";
        eContraseña.style.backgroundColor = "red";
        eContraseña.style.color = "black";
        esValido = false;
    } else {
        eContraseña.style.backgroundColor = "green";
        eContraseña.style.color = "blue";
    }

    if (!esValido) return;

    registros[indice] = {
        telefono: vTelefono,
        contraseña: vContraseña
    };

    document.getElementById("formActualizar").style.display = 'none';

    ingresarregistro();
}

