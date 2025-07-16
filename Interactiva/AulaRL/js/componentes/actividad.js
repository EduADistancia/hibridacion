// Creación de modales
function crearModalLista(idModal, link) {
    let dialogReino = document.createElement('dialog');
    dialogReino.id = idModal;
    
    let botoneraModal = document.createElement('div');
    botoneraModal.classList.add('cerrarModal');
    botoneraModal.append(crearBotonCerrarModal(idModal));
    
    let divIframe = document.createElement('div');
    divIframe.innerHTML = `${link}`;
    dialogReino.append(botoneraModal, divIframe);

    return dialogReino;
}

// Cierre de modal
function crearBotonCerrarModal(idModal) {
    let cerrarDialog = document.createElement('button');
    cerrarDialog.innerText = "x";
    cerrarDialog.title = "Cerrar";
    cerrarDialog.id = `cerrar${idModal}`;
    let divCerrar =  document.createElement('div');
    divCerrar.classList.add('cerrarModal');
    divCerrar.append(cerrarDialog);

    return divCerrar;
}

// Modificación del HTML - Indicaciones
async function crearIndicaciones(datos) {

    // Tarjetas circulares y su modal
    let tarjetas = document.querySelector('#reinosBiologicos');
    let contenedorModales = document.querySelector('#reinoModales');

    // Modales de deficiones extras
    let contadorReinos = 1;

    for (let dato of datos) {
        let botonReino = document.createElement('button');
        botonReino.classList.add('infoBotonImg', 'reino', 'drop-area');
        botonReino.title = "Acceder";
        botonReino.value = `recurso${contadorReinos}`;

        // Imagen de fondo reino
        let style = document.createElement("style");
        style.innerHTML = `.reino:nth-child(${contadorReinos})::before {
            background: url("${dato.background}") center/cover no-repeat;}`;
        document.head.appendChild(style);

        let divReino = document.createElement('div');

        let h3Reino = document.createElement('h3');
        h3Reino.innerText = `${dato.item}`;

        divReino.append(h3Reino);
        botonReino.append(divReino);

        tarjetas.append(botonReino);
        contadorReinos ++;

        // Modal definicion reino
        contenedorModales.append(
            crearModalLista(botonReino.value, dato.link)
        );
    }
}

export { crearIndicaciones }